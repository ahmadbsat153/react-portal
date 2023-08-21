import InvoicesButton from "../components/InvoicesButton";
import { useState, useEffect } from "react";
import SmallTable from "../components/SmallTable";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function CloseReasons({
    url,
    states,
    AlertToast,
    currentUser,
    getCloseReasons,
    closeReasons,
    setCloseReasons,
}) {
    function fromModel() {
        return 4;
    }
    const [showAddRow, setShowAddRow] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const addurl = `${url}api/GTIS/Add/PoCloseReason`;
    const [isFetching, setIsFetching] = useState();
    const [objects, setObjects] = useState();
    const [filteredData, setFilteredData] = useState(closeReasons);
    useEffect(() => {
        if (!closeReasons) {
            setIsFetching(true);
            fetchData();
        }
    }, []);
    function handleShowHideAddButton() {
        if (currentUser.role_id == 8) {
            return false;
        } else {
            return true;
        }
    }
    useEffect(() => {
        setFilteredData(closeReasons);
    }, [closeReasons]);
    const fetchData = async () => {
        axios
            .get(`${url}api/GTIS/PoCloseReasons`, {
                headers: {
                    UserId: currentUser.user_id,
                },
            })
            .then((res) => {
                const x = JSON.stringify(res.data);
                const parsedDataPromise = new Promise((resolve, reject) => {
                    const parsedData = JSON.parse(x);
                    resolve(parsedData);
                });
                parsedDataPromise.then((parsedData) => {
                    setCloseReasons(parsedData.reverse());
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const dynamicHeaders = [
        { label: "Reason Name", key: "ReasonName" },
        { label: "Status", key: "StatusId" },
        // Add more headers as needed...
    ];

    function onChangeFilter(name) {
        // setFilterValue(name)
        filterData(name);
    }

    const filterData = (name) => {
        // Filter the data based on the start and end date filters

        const filtered = closeReasons.filter((item) => {
            const ConsNbMatch =
                name.length > 0 ? item.ReasonName.includes(name) : true;
            // Convert end date string to Date object
            return ConsNbMatch; // Compare the item date to the filter dates
        });
        setFilteredData(filtered);
    };
    return (
        <div className="bg-smooth">
            {isFetching && (
                <div className="min-h-screen md:pl-20 pt-16 h-full flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <div
                            className={`h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce`}
                        ></div>
                        <div
                            className={`h-5 w-5 bg-goldd rounded-full mr-5 animate-bounce200`}
                        ></div>
                        <div
                            className={`h-5 w-5 bg-goldd rounded-full animate-bounce400`}
                        ></div>
                    </div>
                    <div className="text-dark mt-4 font-bold">
                        Please wait while we get the data for you.
                    </div>
                </div>
            )}
            {!isFetching && (
                <div className="p-5">
                    <div className="flex gap-x-1">
                        <h1 className="font-bold text-dark text-3xl">
                            Close Reasons
                        </h1>{" "}
                        <p className="mt-auto text-gray-400">
                            ({closeReasons?.length})
                        </p>
                    </div>
                    <div className="flex justify-between flex-col sm:flex-row gap-y-3 my-5">
                        <div className="flex gap-x-5 gap-y-5 flex-col md:flex-row">
                            <div className="relative border rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) => {
                                        onChangeFilter(e.target.value);
                                    }}
                                    className="w-full py-0.5 h-[25px] pl-12 pr-4 text-gray-500 border-none rounded-md outline-none "
                                />
                            </div>
                        </div>
                        <div className="flex flex-row  gap-x-5 gap-y-3">
                            <div className="">
                                <InvoicesButton
                                    name="Export"
                                    className="w-full hidden"
                                />
                            </div>
                            <div className="">
                                <InvoicesButton
                                    name="Import"
                                    className="w-full hidden"
                                />
                            </div>
                            {editIndex != null ? (
                                <div className="col-span-2">
                                    <InvoicesButton
                                        name={"Cancel"}
                                        onClick={() => setEditIndex(null)}
                                        className="w-full "
                                    />
                                </div>
                            ) : null}
                            {handleShowHideAddButton() ? (
                                <div className="col-span-2">
                                    <InvoicesButton
                                        name={
                                            showAddRow ? "Cancel" : "Add Reason"
                                        }
                                        onClick={() => {
                                            setEditIndex(null);
                                            setShowAddRow(!showAddRow);
                                        }}
                                        className="w-full "
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <SmallTable
                        fromModel={fromModel}
                        showAddRow={showAddRow}
                        setShowAddRow={setShowAddRow}
                        editIndex={editIndex}
                        setEditIndex={setEditIndex}
                        getfunction={getCloseReasons}
                        objects={filteredData}
                        currentUser={currentUser}
                        AlertToast={AlertToast}
                        setObjects={setFilteredData}
                        dynamicHeaders={dynamicHeaders}
                        addurl={addurl}
                        states={states}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            )}
        </div>
    );
}
