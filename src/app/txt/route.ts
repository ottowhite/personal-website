import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const type = searchParams.get('type') || 'pubkey';

	const pubkey =
		"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDg1mB8+Rrk6beLTjF0AZKdoSWDg3xPPKDS5uHfyCiq29Xy050nbGrxXnRLRc+KD9GVDzPoxAFrnmDUE7zicmuaInAg0CdmS2YT3Hu9G8KTyBoYge1RMcQRPB0DCRodVldrm6nAJoRy+1e7WbLSvtlkkrSxi25iHne4eWlgc0r9yMMaAuwQnkHrvWVOhQLbIWAYda2ohcabhfvNVQ2EP1xxdbmPnJW35Rov3MG3yj3kU+9Y9oaRl/Gt+gjVF0/CHmlSNE/dSsIhfduCwIi2fkJ2rNlB3gDQnlIEEH+Er5/cN6phLfV9WPZX8e8Us1RdNv8qfFRLSlvp0S2FsHWVfHDI/KD7ssqU6EflFOo2IEh/fqeSU7NV4DrZg8xtqeGMd4OyQiSbCQx3KiNMGsHN8aOHaP+dfpFQbIr3elwCSqjroq274wYmQ3rhWQqpcOLnXNfDo3tEl6240unTP2CcFw57jrVger6WP4FTFBUiNV7IqgWxq84wKazCrCQ2iqQzSr0= otto@ottos-spectre"

	const add_ow20_script =
		"USER=ow20\n" +
		"USER_ID=123900\n" +
		"PUBKEY='" + pubkey + "'\n" +
		"sudo useradd -u $USER_ID -m -s /bin/bash $USER\n" +
		"sudo mkdir /home/$USER/.ssh\n" +
		"sudo touch /home/$USER/.ssh/authorized_keys\n" +
		"echo $PUBKEY | sudo tee /home/$USER/.ssh/authorized_keys\n" +
		"sudo chown $USER:$USER -R /home/$USER/.ssh\n" +
		"sudo usermod -aG admin $USER\n" +
		"sudo chmod 0700 /home/$USER/.ssh\n" +
		"sudo chmod 0600 /home/$USER/.ssh/authorized_keys\n"

	let content: string;

	switch (type) {
		case 'add_user':
			content = add_ow20_script;
			break;
		case 'pubkey':
		default:
			content = pubkey;
			break;
	}

	return new NextResponse(content, {
		headers: {
			'Content-Type': 'text/plain',
		},
	});
} 
