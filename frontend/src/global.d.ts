interface Window {
    backend: {
        checkForUpdates: () => Promise<string>;
    };
}