const token = process.env.GITHUB_TOKEN;

export const githubService = {
    async getRepositories(){
        
        const response = await fetch("https://api.github.com/user/repos", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            next: {
                revalidate: 60
            }
        });
        if(!response.ok) throw new Error("Unable to fetch posts");
        return response.json();
    },

    async getOneRepository(repository : string) {
        const response = await fetch(`https://api.github.com/repos/MisyuraIlya/${repository}/contents/README.md`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            next: {
                revalidate: 60
            }
        })
        if(!response.ok) throw new Error("Unable to fetch posts");
        return response.json();
    }
}
