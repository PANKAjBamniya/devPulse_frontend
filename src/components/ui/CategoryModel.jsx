import React, { useState } from "react"
import { useCreateCategoryMutation } from "../../feature/api/categoryApi"
import { toast } from "react-toastify"

const CategoryModel = ({ setShowCategoryModal }) => {
    const [name, setName] = useState("")

    const [
        createCategory,
        { isLoading, isError }
    ] = useCreateCategoryMutation()

    const handleSave = async () => {
        if (!name.trim()) return

        try {
            await createCategory({ name }).unwrap()
            setName("")
            toast.success("Category created successfully 🚀")
            setShowCategoryModal(false)
        } catch (error) {
            toast.error("Failed to create category", error)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            {/* Modal Box */}
            <div className="bg-[#0f1722] w-[90%] max-w-sm rounded-2xl p-5 border border-zinc-800">

                <h2 className="text-lg font-semibold text-white">
                    Add Category
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                    Create a category to organize your posts
                </p>

                {/* Input */}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. React, System Design"
                    className="w-full mt-4 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                />

                {/* Error */}
                {isError && (
                    <p className="text-red-400 text-xs mt-2">
                        Failed to create category
                    </p>
                )}

                {/* Actions */}
                <div className="flex gap-3 mt-5">
                    <button
                        onClick={() => setShowCategoryModal(false)}
                        className="flex-1 bg-zinc-700 py-3 rounded-lg text-sm"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="flex-1 bg-blue-600 py-3 rounded-lg text-sm font-medium disabled:opacity-50"
                    >
                        {isLoading ? "Saving..." : "Save"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoryModel
