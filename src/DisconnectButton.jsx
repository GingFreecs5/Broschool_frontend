import React from 'react';

const DisconnectButton = () => {
    const handleDisconnect = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();

        if (auth2.isSignedIn.get()) {
            auth2.signOut().then(() => {
                // Handle user disconnection, e.g., update UI or sign out locally
                console.log('User has been disconnected from Google account');
            });
        }
    };

    return (
        <div>
            <button onClick={handleDisconnect}>Disconnect</button>
        </div>
    );
};

export default DisconnectButton;
