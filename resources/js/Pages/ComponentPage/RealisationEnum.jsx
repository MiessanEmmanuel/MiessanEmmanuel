const RealisationEnum = ({title, className, children, ...props}) => {
    return (
        <div
            className={"  " + className} {...props}>
            <dt className=" font-semibold  text-lg my-1 ">

                {title}
            </dt>
            <dd className=" text-base  text-gray-400">{children}</dd>
        </div>
    )
}
export default RealisationEnum;
