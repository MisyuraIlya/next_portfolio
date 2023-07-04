import React from 'react';
import { githubService } from '@/services/githubService';

type props = {
    params: {
        id: string
    }
}

const page = async ({params: {id}} : props) => {
    console.log('iddd',id)
    const data = await githubService.getOneRepository(id)
    const base64Content = data.content;
    const decodedContent = atob(base64Content);
    console.log('decodedContent',decodedContent)
    return (
        <div>
            <p>{decodedContent}</p>
        </div>
    );
};

export default page;