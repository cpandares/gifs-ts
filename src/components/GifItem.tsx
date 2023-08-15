
interface PropsInterFace {
  title: string;
  url: string;
}

export const GifItem = ({ title, url } : PropsInterFace) => {
  /* console.log(url) */
  return (
    <div>
       <h2>{ title }</h2>
      <img src={ url } alt={ title } />
    </div>
  )
}
