import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Create(props) {
    const { data, setData, post } = useForm({ name: "" });
    const submit = (e) => {
        e.preventDefault();

        post("/language");
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Language
                </h2>
            }
        >
            <Head title="Language" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <select
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    name="name"
                                    id="name"
                                    class="rounded-lg bg-white text-gray-900 dark:text-gray-200 dark:bg-gray-700"
                                >
                                    <option value="">Choose language</option>
                                    <option value="id">Bahasa</option>
                                    <option value="en">English</option>
                                </select>

                                <PrimaryButton className="ml-4">
                                    Switch
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
