export default (key, errors, touched) => {
    if (touched[key]) {
        if (errors[key]) {
            return "error"
        } else {
            return "success"
        }
    } else {
        return ""
    }
};