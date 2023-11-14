import tracksList from '../../assets/tracksList'
import style from './mainPage.module.scss'
import Track from '../../components/Track'

const MainPage = () => {
  return (
    <div className={style.search}>
      <>Пошук пісень</>
      <div className={style.list}>
        {tracksList.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
