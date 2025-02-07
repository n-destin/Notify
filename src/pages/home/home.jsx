/* eslint-disable no-dupe-else-if */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-multi-spaces */
import './home.scss';
import React, { useEffect, useParams, useState } from 'react';
import axios from 'axios';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Displaybox from '../../components/display_box/display_box';
import { newUser, onSessionChange } from '../../services/firebase';
import { auth } from '../../services/datastore';

function Home() {
    const [lectures, setLectures] = useState({});
    const [fileUploadError, setFileUploadError] = useState(false);
    const [transcriptionError, setTranscriptionError] = useState(false);
    const user = auth.currentUser;

    console.log(`User: ${user.uid}`);
    // const userID = user.uid;

    useEffect(() => {
 onSessionChange(user.uid, (data) => {
            setLectures(data);
        });
}, []);

    console.log(lectures);

    function checkForErrorMessage() {
        if (fileUploadError) {
            return (
                <div className="text-center text-md">Error uploading file to AWS S3.</div>
            );
        } else if (transcriptionError) {
            return (
                <div className="text-center text-md">Error transcribing video file.</div>
            );
        } else if (fileUploadError && transcriptionError) {
            return (
                <div className="text-center text-md">Error uploading file and transcribing the video file.</div>
            );
        } else {
            return (
                <div className="text-center text-md" />
            );
        }
    }

    async function uploadFileToS3(file, UUID) {
        // Remove previous error messages
        setFileUploadError(false);
        setTranscriptionError(false);

        // Initialize AWS S3 bucket for storing transcript
        AWS.config.update({
            accessKeyId: process.env.accessKey, // need to make ENV
            secretAccessKey: process.env.secretAccessKey, // need to make ENV
            region: 'us-east-1', // need to make ENV
        });
        const s3 = new AWS.S3();
        const params = {
            Bucket: 'cs52-notify-video-bucket',
            Key: file.name,
            Body: file,
        };

        // Upload file to S3, return download link, send to transcription API
        let fileUrl = '';
        try {
            const response = await s3.upload(params).promise();
            fileUrl = s3.getSignedUrl('getObject', {
                Bucket: 'cs52-notify-video-bucket',
                Key: file.name,
                Expires: 3600, // The URL will expire in 1 hour (adjust as needed)
        });
        // Delete logging after testing
        console.log(fileUrl);
        console.log(file.name);
        console.log(UUID);
    } catch (error) {
        // Notify user of the upload error
        console.error('Error uploading file:', error);
        setFileUploadError(true);
        return;
    }

    // Send download link to transcription API on EC2
    try {
        const url = 'https://api.notify.study/generatetranscript';
        const requestBody = {
            file_link: fileUrl,
            user_id: 'test_UUID',
            file_name: file.name,
        };
        const response = await axios.post(url, requestBody);
        console.log('Transcript generation request successful:', response.data);
        // Handle the response as needed
    } catch (error) {
        console.log('Error uploading link to AWS: ', error);
        setTranscriptionError(true);
        }
    }

    return (
        <div className="home">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="contentdisp">
                <Displaybox lectures={lectures} />
                {/* Using fake userID: abcde12345. This will need to be retrieved and stored on the page when uploading new lectures */}
                <input type="file" onChange={(event) => uploadFileToS3(event.target.files[0], 'abcde12345')} />
            </div>
            <div className="errormessage">
                {checkForErrorMessage()}
            </div>
        </div>
    );
}

export default Home;
