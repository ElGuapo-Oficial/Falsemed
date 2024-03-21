'use server'

export async function onSubmitPaymemtAction(prevState: any ,formData: FormData) {
    console.log("1", formData);
    console.log("2", formData.get('cvv'));
}