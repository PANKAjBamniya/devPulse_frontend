import React, { useEffect, useState } from "react"
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../feature/api/categoryApi"
import CategoryModel from "./CategoryModel"
import { FiX } from "react-icons/fi"
import { useCreateScheduleMutation, useGetMyScheduleQuery, useUpdateScheduleMutation } from "../../feature/api/scheduleApi"
import { toast } from "react-toastify"

export default function Schedule({ setSchedulePage }) {

    const { data: scheduleRes } = useGetMyScheduleQuery()
    const schedule = scheduleRes?.data

    const {
        data: categoryRes,
        isLoading: categoryLoading,
        isError: categoryError,
    } = useGetCategoriesQuery()

    const [
        createSchedule,
        {
            isLoading: scheduleLoading,
            isSuccess: scheduleSuccess,
            isError: scheduleError,
            error: scheduleErrorData,
        },
    ] = useCreateScheduleMutation()

    const [
        updateSchedule,
        {
            isLoading: scheduleUpLoading,
            isSuccess: scheduleUpSuccess,
        },
    ] = useUpdateScheduleMutation()

    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const [deleteCategory] = useDeleteCategoryMutation()
    const categories = categoryRes?.data || []

    const [selected, setSelected] = useState([])
    const [frequency, setFrequency] = useState("Daily")
    const [description, setDescription] = useState("")

    const [time, setTime] = useState({
        hour: "09",
        minute: "15",
        period: "AM",
    })


    const toggleCategory = (cat) => {
        setSelected((prev) =>
            prev.includes(cat)
                ? prev.filter((c) => c !== cat)
                : [...prev, cat]
        )
    }


    const handleSaveSchedule = async () => {
        try {
            const payload = {
                time: {
                    hour: time.hour,
                    minute: time.minute,
                    period: time.period,
                },
                frequency,
                categories: categories
                    .filter((c) => selected.includes(c.name))
                    .map((c) => c._id),
                description,
            }

            if (schedule?._id) {
                // UPDATE
                await updateSchedule(payload).unwrap()
                toast.success("Schedule updated successfully ✨")
                setSchedulePage(false)
            } else {
                // CREATE
                await createSchedule(payload).unwrap()
                toast.success("Schedule created successfully 🚀")
                setSchedulePage(false)

            }

        } catch (err) {
            toast.error(err?.data?.message || "Failed to save schedule")
        }
    }




    useEffect(() => {
        if (!schedule) return

        setTime({
            hour: schedule.time.hour,
            minute: schedule.time.minute,
            period: schedule.time.period,
        })

        setFrequency(schedule.frequency)
        setDescription(schedule.description || "")

        setSelected(
            schedule.categories.map((cat) => cat.name)
        )
    }, [schedule])




    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-gradient-to-b from-[#0b1220] to-[#05080f] rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden relative">

                {/* Header */}
                <div className="p-5 border-b border-zinc-800 flex justify-between items-center">
                    <div>
                        <h1 className="text-white text-lg font-semibold">
                            Schedule & Preferences
                        </h1>
                        <p className="text-sm text-zinc-400 mt-1">
                            Our AI uses these settings to optimize your post timing.
                        </p>
                    </div>
                    <button
                        onClick={() => setSchedulePage(false)}
                        className="bg-zinc-600 px-5 py-3 rounded-lg text-sm font-medium"
                    >
                        Cancel
                    </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-6 overflow-y-auto pb-28">
                    {/* Posting Time */}
                    <section>
                        <h2 className="text-white font-medium mb-3">Posting Time</h2>

                        <div className="bg-[#0e1626] rounded-xl p-4 flex gap-3 justify-between items-center">

                            {/* Hour */}
                            <select
                                value={time?.hour}
                                onChange={(e) =>
                                    setTime((prev) => ({ ...prev, hour: e.target.value }))
                                }
                                className="bg-[#1b2a45] px-4 py-3 rounded-xl text-white outline-none"
                            >
                                {Array.from({ length: 12 }, (_, i) => {
                                    const val = String(i + 1).padStart(2, "0")
                                    return (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    )
                                })}
                            </select>

                            <span className="text-blue-400 text-xl">:</span>

                            {/* Minute */}
                            <select
                                value={time?.minute}
                                onChange={(e) =>
                                    setTime((prev) => ({ ...prev, minute: e.target.value }))
                                }
                                className="bg-[#1b2a45] px-4 py-3 rounded-xl text-white outline-none"
                            >
                                {["00", "15", "30", "45"].map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>

                            {/* AM / PM */}
                            <select
                                value={time?.period}
                                onChange={(e) =>
                                    setTime((prev) => ({ ...prev, period: e.target.value }))
                                }
                                className="bg-[#1b2a45] px-4 py-3 rounded-xl text-white outline-none"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </section>

                    {/* Frequency */}
                    <section>
                        <h2 className="text-white font-medium mb-3">Frequency</h2>
                        <div className="bg-[#0e1626] rounded-xl flex">
                            {["Daily", "Alternate"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setFrequency(item)}
                                    className={`flex-1 py-3 text-sm rounded-xl transition
                    ${frequency === item
                                            ? "bg-[#1b2a45] text-white"
                                            : "text-zinc-400"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Categories */}
                    <section>
                        <div className="flex items-center justify-between">
                            <h2 className="text-white font-medium mb-3">
                                Content Categories
                            </h2>
                            <button
                                onClick={() => setShowCategoryModal(true)}
                                className="text-sm text-blue-400 hover:text-blue-300"
                            >
                                + Add Category
                            </button>
                        </div>


                        {categoryLoading && (
                            <p className="text-sm text-zinc-400 ml-2">
                                Loading categories...
                            </p>
                        )}

                        {categoryError && (
                            <p className="text-sm text-red-400 ml-2">
                                Failed to load categories
                            </p>
                        )}

                        {!categoryLoading && categories.length === 0 && (
                            <p className="text-sm text-red-500 ml-2">
                                Please add categories first
                            </p>
                        )}

                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <div
                                    key={cat._id}
                                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm border transition
        ${selected.includes(cat.name)
                                            ? "border-blue-500 text-blue-400 bg-blue-500/10"
                                            : "border-zinc-700 text-zinc-400"
                                        }`}
                                >

                                    <button
                                        onClick={() => toggleCategory(cat.name)}
                                        className="focus:outline-none"
                                    >
                                        {cat.name}
                                    </button>

                                    {/* Delete icon */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            deleteCategory(cat._id)
                                        }}
                                        className="ml-1 text-zinc-500 hover:text-red-400"
                                    >
                                        <FiX size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* Description */}
                    <section>
                        <h2 className="text-white font-medium mb-2">
                            Post Focus
                        </h2>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="e.g. React hooks best practices, common mistakes, interview tips..."
                            rows={3}
                            className="w-full bg-[#0e1626] border border-zinc-700 rounded-xl p-4 text-sm text-white outline-none resize-none focus:border-blue-500"
                        />

                        <p className="text-xs text-zinc-500 mt-1">
                            Optional — helps AI generate more specific & better content.
                        </p>
                    </section>

                    {/* Recommendation */}
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-sm text-blue-300">
                        💡 Recommended: Posting Daily at <b>9:00 AM</b> yields
                        <b> 34% higher engagement</b> for developer content.
                    </div>
                </div>

                {/* Bottom Button */}
                <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-[#05080f]">
                    <button
                        onClick={handleSaveSchedule}
                        disabled={selected.length === 0}
                        className={`w-full py-4 rounded-xl font-semibold transition
    ${selected.length === 0
                                ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            }`}
                    >
                        {selected.length === 0
                            ? "Select at least one category"
                            : schedule?._id
                                ? "Update Schedule ✓"
                                : "Save Schedule ✓"}
                    </button>

                </div>
            </div>
            {
                showCategoryModal && (<CategoryModel setShowCategoryModal={setShowCategoryModal} />)
            }
        </div>
    )
}


