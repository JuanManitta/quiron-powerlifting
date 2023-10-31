export const fileUpload = async( file: File ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dfjjv417s/upload';

    const formData = new FormData();
    formData.append('upload_preset','dash-powerlifting');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method:'POST',
            body: formData
        })
        if(!resp.ok) throw new Error ('No se pudo subir')
        const cloudResponse = await resp.json();
        return cloudResponse.secure_url;
        
    } catch (error:any) {
        throw new Error (error.message)
        
    }
}