import { useEffect } from 'react';

const useAutoUpdate = () => {
    useEffect(() => {
        const checkForUpdates = async () => {
            try {
                const result = await window.backend.checkForUpdates();
                if (result) {
                    alert(result);
                } else {
                    console.log('No updates available.');
                }
            } catch (error) {
                console.error('Error checking for updates:', error);
            }
        };

        checkForUpdates();
    }, []);
};

export default useAutoUpdate;
