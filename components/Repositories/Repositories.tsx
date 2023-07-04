"use client"
import React from 'react';
import RepositoryCard from './RepositoryCard';

type Props = {
    repositores: any[]
}

const Repositories = ({repositores}: Props) => {
    return (
        <div>
             {repositores.map((repository,index) => 
                <RepositoryCard repository={repository} key={index}/>
             )}
        </div>
    );
};

export default Repositories;