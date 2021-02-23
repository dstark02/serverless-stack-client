const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IJ2NzHWu2Au1diV945VjjxNFo5Qh4AYnW4meALP1EFCP0XTAStl7fACfLfxj9DEJBqDwDbONu5x5rz2U37UaPBO00dZrrOhPZ",
    s3: {
        REGION: "eu-west-1",
        BUCKET: "ds-notes-app-upload",
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://x9h3jo4725.execute-api.eu-west-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_RFnzZ8T6x",
        APP_CLIENT_ID: "4k5t3n1000sjtiakj4bocdrkqr",
        IDENTITY_POOL_ID: "eu-west-1:010fc61a-8704-4809-9a39-e7088deb6fe3",
    },
};

export default config;