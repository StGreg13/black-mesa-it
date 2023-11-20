import Image from 'next/image'

const ErrorMessage = ({text}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        style={{ display: 'block',objectFit: 'contain', margin: "0 auto"}}
        width={250}
        height={250}
        src="/kotik.png" alt="Error"/>
      <h2>Упс</h2>
      <p>{text}</p>
    </div>
  )
}
export default ErrorMessage