export default function Reciever(item) {
    return (
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                    RECEIVER NAME
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500  sm:mt-0 ">{item.item['RECEIVERNAME']}</dd>
                    <dt className="text-sm font-medium text-gray-900">
                    RECEIVER SUBURB
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500  sm:mt-0 ">{item.item['RECEIVERSUBURB']}</dd>
                    <dt className="text-sm font-medium text-gray-900">
                    RECEIVER REFERENCE
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500  sm:mt-0 ">{item.item['RECEIVER REFERENCE']}</dd>
                    <dt className="text-sm font-medium text-gray-900">
                    RECEIVER ZONE
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500  sm:mt-0 ">{item.item['RECEIVERZONE']}</dd>
                    <dt className="text-sm font-medium text-gray-900">
                    RECEIVER POSTCODE
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500  sm:mt-0 ">{item.item['RECEIVERPOSTCODE']}</dd>
                    
                </div>
            </dl>
        </div>
    );
}
