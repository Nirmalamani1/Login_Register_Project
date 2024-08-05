// take online validate email datas using js
export const ValidateEmail = (email) => {

    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    return regex.test(email)
};

export const getinitials = (name) => {
    if (!name) return ""
    const words = name.split(" ");
    let initials = " ";
    for (let i = 0; i < Math.min(words.length,2); i++) {
        initials += words[i][0]
    }
    return initials.toUpperCase();
}