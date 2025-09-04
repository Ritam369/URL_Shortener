function validateUrl(url) {
    try {
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    } catch (error) {
        console.error("Error validating URL:", error);
        return false;
    }
}

export default validateUrl;
