import axios from 'axios';

export async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

  try {
    const response = await axios.post(
      import.meta.env.VITE_CLOUDINARY_URL,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload image');
  }
}