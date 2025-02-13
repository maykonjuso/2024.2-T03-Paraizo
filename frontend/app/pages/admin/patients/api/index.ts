export class PacientRepositories {
    private url: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    private key: string | undefined = process.env.NEXT_PUBLIC_API_KEY;

    async getAllPacients(): Promise<any> {
        try {
            const response = await fetch(`${this.url!}/pacient/all`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.key}`,
                },
            });
            if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar pacientes:", error);
        }
    }

    async getPacientById(id: string): Promise<any> {
        try {
            const response = await fetch(`${this.url!}/pacient?id=${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.key}`,
                },
            });
            if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar paciente:", error);
        }
    }

    async createPacient(data: any): Promise<any> {
        try {
            const response = await fetch(`${this.url!}/pacient`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.key}`,
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao criar paciente:", error);
        }
    }

    async updatePacient(data: any): Promise<any> {
        try {
            const response = await fetch(`${this.url!}/pacient`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.key}`,
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao atualizar paciente:", error);
        }
    }

    async deletePacient(id: string): Promise<any> {
        try {
            const response = await fetch(`${this.url!}/pacient?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.key}`,
                },
            });
            if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao deletar paciente:", error);
        }
    }
}
