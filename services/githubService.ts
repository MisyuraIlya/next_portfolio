const token = process.env.GITHUB_TOKEN;

export const githubService = {
    async getRepositories(){
        
        const response = await fetch("https://api.github.com/user/repos?per_page=100", {
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
    },
    
    async getLanguages() {
        const data = await githubService.getRepositories()
        const names: any = []
        data.map((item: any) => {
            names.push(item.name)
        })


        const languagesPromises = names.map(async (item: any) => {
            const response = await fetch(`https://api.github.com/repos/MisyuraIlya/${item}/languages`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          
            const data = await response.json();
            return data; // Return the data from the API response
          });
          
          const languages = await Promise.all(languagesPromises);

          const reducedLanguages = languages.reduce((acc, curr) => {
            Object.entries(curr).forEach(([key, value]) => {
              if (key in acc) {
                acc[key] += value;
              } else {
                acc[key] = value;
              }
            });
            return acc;
          }, {});
          
          return reducedLanguages;
    }
}
