import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";  // ✅ Correct import path
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Welcome back, {session.user.name}!
                            </h1>
                            <p className="mt-2 text-gray-600">
                                You are now signed in to DevConnect.
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-md">
                                <h2 className="text-sm font-medium text-gray-500">Your Profile</h2>
                                <dl className="mt-2 space-y-1 text-sm text-gray-900">
                                    <div>
                                        <dt className="inline font-medium text-gray-500">Username:</dt>
                                        <dd className="inline ml-2">{session.user.username}</dd>
                                    </div>
                                    <div>
                                        <dt className="inline font-medium text-gray-500">Email:</dt>
                                        <dd className="inline ml-2">{session.user.email}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
    );
}