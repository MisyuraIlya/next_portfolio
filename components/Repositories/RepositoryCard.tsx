import React from 'react';
import Link from 'next/link';
type props = {
    repository: any
}

const RepositoryCard = ({repository} : props ) => {
    return (
        <div>
            <li>
                <Link href={`/repository/${repository.name}`}>
                    {repository.name}
                </Link>
            </li>
        </div>
    );
};

export default RepositoryCard;