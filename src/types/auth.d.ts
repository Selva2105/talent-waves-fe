export interface responseStructure {
    status: string;
    message: string;
}

export interface AccountCreate {
    userType: "CANDIDATE" | "EMPLOYER";
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AccountLogin {
    email: string;
    password: string;
}

export interface SignupResponse extends responseStructure {
    data: {
        id: string;
        email: string;
        username: string;
        password: string;
        fullName: string;
        profilePhoto: string | null;
        headline: string | null;
        userType: "CANDIDATE" | "EMPLOYER";
        createdAt: string;
        updatedAt: string;
    };
}

export interface User {
    id: string;
    email: string;
    username: string;
    fullName: string;
    profilePhoto: string | null;
    headline: string | null;
    userType: "CANDIDATE" | "EMPLOYER";
    createdAt: string;
    updatedAt: string;
}

export interface SigninResponse extends responseStructure {
    data: {
        token: string;
        user: {
            id: string;
            email: string;
            username: string;
            fullName: string;
            profilePhoto: string | null;
            headline: string | null;
            userType: "CANDIDATE" | "EMPLOYER";
            createdAt: string;
            updatedAt: string;
        };
    };
}


export interface userDetailsResponse extends responseStructure {
    data : User
}