import { User as UserModels } from "../interfaces/user.interface";
import { useRouter } from 'next/navigation';



export class UserRepositories {
    private url: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    private key: string | undefined = process.env.NEXT_PUBLIC_API_KEY;

    async register(data: UserModels): Promise<any> {
        try {
            const fetchData = async () => {
                const response = await fetch(`${this.url!}/authenticator/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.key}`,
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const responseData = await response.json();
                const token = responseData.token;
                localStorage.setItem('authToken', token);

                const router = useRouter();
                router.push('/pages/home');
            };

            await fetchData();
        } catch (error) {
            console.error("Falha ao efetuar registro:", error);
        }
    }

    async login(data: UserModels): Promise<boolean> {
        try {
            const response = await fetch(`${this.url!}/authenticator/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.key}`,
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                console.error("Erro no login:", response.status, response.statusText);
            }
    
            const responseData = await response.json();
            
            if (responseData.status !== 200){
                return false
            }
            
            return true;
        } catch (error) {
            console.error("Falha ao efetuar login:", error);
            return false;
        }
    }
    
}

