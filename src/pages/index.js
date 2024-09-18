import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import ServicesSection from '@site/src/components/ServicesSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faArrowRight, faHouse, faScrewdriverWrench, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.scss';

export default function HomePage() {

  const scrollerAdoptersRef = useRef(null);

  useEffect(() => {
    const scrollerAdopters = scrollerAdoptersRef.current;
    if (scrollerAdopters) {
      const scrollerContent = Array.from(scrollerAdopters.children);

      scrollerContent.forEach(adopter => {
        const duplicatedAdopter = adopter.cloneNode(true);
        duplicatedAdopter.setAttribute('aria-hidden', 'true');
        scrollerAdopters.appendChild(duplicatedAdopter);
      })
    }
  }, []);


  return (
    <Layout title="Home">
      <div className='gridBackground'>
        <svg width="100%" height="auto" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio>
          <path d="M44.0004 0L44 900M89 0L88.9996 900M134 0L134 900M179 0L179 900M224 0L224 900M269 0L269 900M314 0L313.999 900M359 0L358.999 900M404 0L403.999 900M449 0L448.999 900M0.000439405 43.9999H900M0.000439405 88.9999H900M0.000439405 134H900M0.000439405 180H900M0.000439405 224H900M0.000439405 269H900M0.000439405 314H900M0.000439405 359H900M0.000439405 404H900M0.000439405 449H900M0 494H899.999M0 539H899.999M0 584H899.999M0 630H899.999M0 674H899.999M0 719H899.999M0 764H899.999M0 809H899.999M0 854H899.999M494 0L494 900M539 0L539 900M584 0L584 900M629 0L629 900M674 0L674 900M719 0L719 900M764 0L763.999 900M809 0L808.999 900M854 0L853.999 900" stroke="#33b8a4" stroke-width="1" />
        </svg>
      </div>
      <header className='container'>
        <div className={styles.heroBanner}>
          <h1 className={clsx('hero-title', styles.heroBanner__title)}>Thingweb: The <span className={styles.highlight}>Future of IoT</span> Development</h1>
          <p className={clsx('hero-subheader', styles.heroBanner__subheader)}>Leverage web standards for faster development and better interoperability.</p>
          <div className={styles.bannerCta}>
            <a className='btn btn-primary' href='/docs/intro'>
              Get Started
              <FontAwesomeIcon icon={faCode} className='icon' />
            </a>

            <a className='btn btn-primary btn-outline' href='#vp-section'>
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.vpSection} id='vp-section'>
          <div className={clsx('container', styles.vpSection__container)}>
            <h2 className={clsx('hero-title', styles.vpSection__title)}>Unlock the True Potential of IoT</h2>

            <p className={clsx('subheader', styles.vpSection__subheader)}>Develop interoperable IoT applications
              with intuitive tools and leveraging well know web standards.</p>

            <div className={styles.vpSection__features}>
              <div className={clsx(styles.feature, styles.powerfulFeatures)}>
                <div className={styles.feature__icon}>
                  <svg width="100%" height="auto" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className={styles.rocketIcon}>
                    <path className={styles.rocket} d="M94.6092 167.464L94.1371 166.992L82.6966 155.551C79.8133 152.668 78.8026 148.509 80.0868 144.655C81.1955 141.365 82.674 137.078 84.4482 132.162L84.9316 130.822H83.5075H44.336C41.5086 130.822 38.8785 129.31 37.4655 126.845C36.0538 124.383 36.0861 121.362 37.5316 118.931L37.5321 118.93L56.9696 86.1639C56.9697 86.1638 56.9697 86.1637 56.9698 86.1637C61.6033 78.3581 69.9776 73.5839 79.0276 73.5839H109.498H110.065L110.356 73.0984C111.233 71.6374 112.111 70.283 112.994 68.958C143.001 24.7023 187.671 23.2137 214.429 28.1389L214.432 28.1394C218.31 28.8415 221.33 31.8858 222.069 35.7828C226.993 62.5782 225.465 107.21 181.245 137.215L181.241 137.218C179.966 138.092 178.577 138.969 177.108 139.851L176.623 140.142V140.708V171.179C176.623 180.231 171.847 188.64 164.046 193.235L164.043 193.237L131.277 212.675L131.276 212.675C128.845 214.121 125.824 214.153 123.362 212.741C120.895 211.327 119.384 208.733 119.384 205.871V166.181V164.775L118.056 165.236C112.846 167.047 108.301 168.525 104.86 169.635C101.302 170.778 97.4319 169.922 94.6092 167.464ZM177.623 88.3936C181.816 88.3936 185.837 86.7279 188.802 83.763C191.767 80.7982 193.432 76.7769 193.432 72.5839C193.432 68.391 191.767 64.3697 188.802 61.4048C185.837 58.44 181.816 56.7743 177.623 56.7743C173.43 56.7743 169.409 58.44 166.444 61.4048C163.479 64.3697 161.813 68.391 161.813 72.5839C161.813 76.7769 163.479 80.7982 166.444 83.763C169.409 86.7279 173.43 88.3936 177.623 88.3936Z" stroke="#141414" strokeWidth="1" />
                    <path className={clsx(styles.line, styles.line1)} d="M25.9478 223.037L79.5685 169.416" stroke="black" strokeWidth="1" strokeLinecap="round" />
                    <path className={clsx(styles.line, styles.line2)} d="M25 185.934L65.2155 145.719" stroke="black" strokeWidth="1" strokeLinecap="round" />
                    <path className={clsx(styles.line, styles.line3)} d="M63.8633 224.798L104.079 184.582" stroke="black" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className={styles.feature__title}>Powerful Features</h3>
                <p className={styles.feature__description}>Develop interoperable solutions that work seamlessly across all domains.</p>
              </div>

              <div className={clsx(styles.feature, styles.seamlessIntegration)}>
                <div className={styles.feature__icon}>
                  <svg width="100%" height="auto" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className={styles.puzzleIcon}>
                    <path className={styles.stationaryPiece} d="M171.042 130.509L171.045 130.506C173.84 128.41 175.669 125.441 175.669 122.066C175.669 118.703 173.846 115.735 171.054 113.641C168.261 111.547 164.451 110.281 160.289 110.281C156.128 110.281 152.317 111.547 149.525 113.641C146.732 115.735 144.909 118.703 144.909 122.066C144.909 125.441 146.739 128.41 149.533 130.506L149.537 130.509C151.057 131.638 152.099 133.195 152.099 134.829C152.099 137.153 150.21 139.042 147.886 139.042H120.744C115.342 139.042 110.958 134.659 110.958 129.257V102.114C110.958 99.7901 112.848 97.9011 115.171 97.9011C116.806 97.9011 118.362 98.9437 119.492 100.464L119.494 100.467C121.59 103.262 124.559 105.091 127.934 105.091C131.297 105.091 134.266 103.268 136.359 100.475C138.453 97.6828 139.719 93.8725 139.719 89.711C139.719 85.5494 138.453 81.7391 136.359 78.9466C134.266 76.1541 131.297 74.3307 127.934 74.3307C124.559 74.3307 121.59 76.1604 119.494 78.9549L119.492 78.9584C118.362 80.4782 116.806 81.5209 115.171 81.5209C112.848 81.5209 110.958 79.6318 110.958 77.308V64.5456C110.958 59.1436 115.342 54.7604 120.744 54.7604H147.886C151.315 54.7604 154.099 51.9759 154.099 48.5476C154.099 46.0487 152.537 43.9659 150.732 42.6238C148.315 40.8102 146.909 38.3865 146.909 35.7852C146.909 33.194 148.31 30.7702 150.725 28.9598C153.139 27.1494 156.519 26 160.289 26C164.059 26 167.439 27.1494 169.854 28.9598C172.268 30.7702 173.669 33.194 173.669 35.7852C173.669 38.3864 172.264 40.8099 169.847 42.6235C168.042 43.9655 166.479 46.0485 166.479 48.5476C166.479 51.9759 169.264 54.7604 172.692 54.7604H185.455C190.857 54.7604 195.24 59.1436 195.24 64.5456V77.308C195.24 80.7364 198.024 83.5209 201.453 83.5209C203.952 83.5209 206.034 81.9584 207.376 80.1538C209.19 77.7362 211.614 76.3307 214.215 76.3307C216.806 76.3307 219.23 77.7317 221.04 80.1464C222.851 82.5612 224 85.9409 224 89.711C224 93.481 222.851 96.8608 221.04 99.2756C219.23 101.69 216.806 103.091 214.215 103.091C211.614 103.091 209.19 101.686 207.376 99.2681C206.034 97.4635 203.952 95.9011 201.453 95.9011C198.024 95.9011 195.24 98.6856 195.24 102.114V129.257C195.24 134.659 190.857 139.042 185.455 139.042H172.692C170.368 139.042 168.479 137.153 168.479 134.829C168.479 133.195 169.522 131.638 171.042 130.509Z" stroke="black" strokeWidth="1" />
                    <path className={styles.stationaryPiece} d="M86.0833 215.467L86.0868 215.464C88.8813 213.368 90.711 210.4 90.711 207.025C90.711 203.662 88.8876 200.693 86.0951 198.599C83.3026 196.506 79.4923 195.24 75.3307 195.24C71.1692 195.24 67.3589 196.506 64.5664 198.599C61.7739 200.693 59.9505 203.662 59.9505 207.025C59.9505 210.4 61.7801 213.368 64.5747 215.464L64.5782 215.467C66.098 216.596 67.1406 218.153 67.1406 219.787C67.1406 222.111 65.2516 224 62.9278 224H35.7852C30.3831 224 26 219.617 26 214.215V187.072C26 184.748 27.8891 182.859 30.2128 182.859C31.8471 182.859 33.4036 183.902 34.5332 185.422L34.5358 185.425C36.6317 188.22 39.6003 190.049 42.9753 190.049C46.3384 190.049 49.3072 188.226 51.4008 185.434C53.4944 182.641 54.7604 178.831 54.7604 174.669C54.7604 170.508 53.4944 166.697 51.4008 163.905C49.3072 161.112 46.3384 159.289 42.9753 159.289C39.6003 159.289 36.6317 161.119 34.5358 163.913L34.5332 163.917C33.4036 165.436 31.8471 166.479 30.2128 166.479C27.8891 166.479 26 164.59 26 162.266V149.504C26 144.102 30.3831 139.719 35.7852 139.719H62.9278C64.456 139.719 65.7944 139.432 66.7273 138.523C67.6662 137.607 67.9734 136.277 67.9734 134.738C67.9734 133.349 67.1929 132.039 66.3467 131.01C65.476 129.95 64.3984 129.022 63.526 128.374C61.3137 126.713 60.8936 124.494 60.8936 121.589C60.8936 119.037 62.5182 116.393 65.2401 114.339C67.9434 112.3 71.5933 110.958 75.3307 110.958C79.068 110.958 82.7109 112.3 85.4074 114.339C88.122 116.391 89.7415 119.036 89.7415 121.589C89.7415 124.399 88.8642 127.183 86.6034 128.879C85.7443 129.518 84.7808 130.325 84.0255 131.275C83.2716 132.223 82.6617 133.393 82.6617 134.738C82.6617 136.282 82.9778 137.612 83.9246 138.526C84.863 139.432 86.2049 139.719 87.7337 139.719H100.496C105.898 139.719 110.281 144.102 110.281 149.504V162.266C110.281 165.695 113.066 168.479 116.494 168.479C118.993 168.479 121.076 166.917 122.418 165.112C124.231 162.694 126.655 161.289 129.257 161.289C131.848 161.289 134.272 162.69 136.082 165.105C137.892 167.519 139.042 170.899 139.042 174.669C139.042 178.439 137.892 181.819 136.082 184.234C134.272 186.648 131.848 188.049 129.257 188.049C126.655 188.049 124.231 186.644 122.418 184.226C121.076 182.422 118.993 180.859 116.494 180.859C113.066 180.859 110.281 183.644 110.281 187.072V214.215C110.281 
                    219.617 105.898 224 100.496 224H87.7337C85.4099 224 83.5208 222.111 83.5208 219.787C83.5208 218.153 84.5635 216.596 86.0833 215.467Z" stroke="black" strokeWidth="1" />
                    <path className={styles.removedPiece} d="M86.0834 130.509L86.0868 130.506C88.8814 128.41 90.711 125.441 90.711 122.066C90.711 118.703 88.8877 115.735 86.0951 113.641C83.3027 111.547 79.4924 110.281 75.3308 110.281C71.1693 110.281 67.3589 111.547 64.5665 113.641C61.774 115.735 59.9506 118.703 59.9506 122.066C59.9506 125.441 61.7802 128.41 64.5748 130.506L64.5783 130.509C66.0981 131.638 67.1407 133.195 67.1407 134.829C67.1407 137.153 65.2516 139.042 62.9279 139.042H35.7852C30.3832 139.042 26.0001 134.659 26.0001 129.257V102.114C26.0001 99.7901 27.8891 97.9011 30.2129 97.9011C31.8472 97.9011 33.4037 98.9437 34.5332 100.464L34.5358 100.467C36.6318 103.262 39.6003 105.091 42.9753 105.091C46.3384 105.091 49.3072 103.268 51.4009 100.475C53.4944 97.6828 54.7605 93.8725 54.7605 89.711C54.7605 85.5494 53.4944 81.7391 51.4009 78.9466C49.3072 76.1541 46.3384 74.3307 42.9753 74.3307C39.6003 74.3307 36.6318 76.1603 34.5358 78.9549L34.5332 78.9584C33.4037 80.4782 31.8472 81.5208 30.2129 81.5208C27.8891 81.5208 26.0001 79.6318 26.0001 77.308V64.5456C26.0001 59.1436 30.3832 54.7604 35.7852 54.7604H62.9279C66.3562 54.7604 69.1407 51.9759 69.1407 48.5476C69.1407 46.0485 67.578 43.9655 65.7732 42.6234C63.3559 40.8099 61.9506 38.3864 61.9506 35.7852C61.9506 33.194 63.3516 30.7702 65.7662 28.9598C68.181 27.1494 71.5608 26 75.3308 26C79.1008 26 82.4806 27.1494 84.8954 28.9598C87.3101 30.7702 88.711 33.194 88.711 35.7852C88.711 38.3863 87.3058 40.8097 84.8887 42.6233C83.0838 43.9653 81.5209 46.0483 81.5209 48.5476C81.5209 51.9759 84.3054 54.7604 87.7337 54.7604H100.496C105.898 54.7604 110.281 59.1436 110.281 64.5456V77.308C110.281 78.8871 110.655 80.2673 111.604 81.2477C112.56 82.2341 113.926 82.6389 115.521 82.6389C116.941 82.6389 118.135 81.8278 119.048 80.9668C119.95 80.115 120.732 79.0628 121.333 78.2543L121.378 78.1932C121.378 78.1927 121.379 78.1921 121.379 78.1916C123.102 75.8963 125.41 75.0533 128.164 75.0533C130.711 75.0533 133.419 76.727 135.54 79.5135C137.644 82.2778 139.042 85.9826 139.042 89.711C139.042 93.4396 137.644 97.1545 135.539 99.9288C133.417 102.726 130.709 104.407 128.164 104.407C125.476 104.407 122.631 103.105 120.874 100.763C120.801 100.665 120.727 100.565 120.651 100.462C120.114 99.7334 119.499 98.8984 118.791 98.237C117.956 97.457 116.895
                    96.8214 115.521 96.8214C113.933 96.8214 112.567 97.2129 111.609 98.1887C110.655 99.1608 110.281 100.535 110.281 102.114V129.257C110.281 134.659 105.898 139.042 100.496 139.042H87.7337C85.41 139.042 83.5209 137.153 83.5209 134.829C83.5209 133.195 84.5635 131.638 86.0834 130.509Z" stroke="black" strokeWidth="1" />
                  </svg>

                </div>
                <h3 className={styles.feature__title}>Seamless Integration</h3>
                <p className={styles.feature__description}>Leverage W3C standards that you love and know to ensure your applications remain compatible and adaptable.</p>
              </div>

              <div className={clsx(styles.feature, styles.communityDriven)}>
                <div className={styles.feature__icon}>
                  <svg width="100%" height="auto" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className={styles.communityIcon}>
                    <path className={styles.bodyLeft} d="M26 134.093C26 115.972 40.7187 101.27 58.8669 101.27H88.6941C106.842 101.27 121.561 115.972 121.561 134.093C121.561 137.271 118.984 139.867 115.777 139.867H31.7835C28.5974 139.867 26 137.292 26 134.093Z" stroke="black" strokeWidth="1" />
                    <path className={styles.headLeft} d="M51 67.4637C51 61.2691 53.464 55.328 57.8504 50.9474C62.2368 46.5667 68.1863 44.1055 74.3902 44.1055C80.5942 44.1055 86.5437 46.5667 90.9301 50.9474C95.3165 55.328 97.7805 61.2691 97.7805 67.4637C97.7805 73.6583 95.3165 79.5994 90.9301 83.98C86.5437 88.3607 80.5942 90.8219 74.3902 90.8219C68.1863 90.8219 62.2368 88.3607 57.8504 83.98C53.464 79.5994 51 73.6583 51 67.4637Z" stroke="black" strokeWidth="1" />
                    <path className={styles.bodyRight} d="M128.439 134.068C128.439 115.947 143.158 101.246 161.306 101.246H191.133C209.281 101.246 224 115.947 224 134.068C224 137.247 221.423 139.843 218.216 139.843H134.223C131.036 139.843 128.439 137.268 128.439 134.068Z" stroke="black" strokeWidth="1" />
                    <path className={styles.headRight} d="M153 67.3934C153 61.1988 155.464 55.2577 159.85 50.8771C164.237 46.4964 170.186 44.0352 176.39 44.0352C182.594 44.0352 188.544 46.4964 192.93 50.8771C197.317 55.2577 199.78 61.1988 199.78 67.3934C199.78 73.588 197.317 79.5291 192.93 83.9097C188.544 88.2904 182.594 90.7516 176.39 90.7516C170.186 90.7516 164.237 88.2904 159.85 83.9097C155.464 79.5291 153 73.588 153 67.3934Z" stroke="black" strokeWidth="1" />
                    <path className={styles.bodyCenter} d="M65.292 198.285C65.292 174.911 84.2766 155.95 107.684 155.95H145.9C169.307 155.95 188.292 174.911 188.292 198.285C188.292 202.512 184.865 205.965 180.601 205.965H72.9834C68.7468 205.965 65.292 202.54 65.292 198.285Z" stroke="black" strokeWidth="1" />
                    <path className={styles.headCenter} d="M96.583 113.338C96.583 105.326 99.7697 97.6426 105.443 91.9773C111.115 86.3118 118.81 83.1288 126.833 83.1288C134.856 83.1288 142.551 86.3118 148.223 91.9773C153.896 97.6426 157.083 105.326 157.083 113.338C157.083 121.349 153.896 129.033 148.223 134.698C142.551 140.364 134.856 143.547 126.833 143.547C118.81 143.547 111.115 140.364 105.443 134.698C99.7697 129.033 96.583 121.349 96.583 113.338Z" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
                <h3 className={styles.feature__title}>Community Driven</h3>
                <p className={styles.feature__description}>Benefit from a collaborative development environment and have access to a plethora of community resources.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className={clsx('container', styles.toolsSection__container)}>

            <h2 className={clsx('hero-title', styles.toolsSection__title)}>Powerful Tools To Drive Your IoT Development</h2>

            <p className={clsx('subheader', styles.toolsSection__subheader)}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh.
              Suspendisse adipiscing convallis libero tristique auctor ultricies ut ullamcorper tincidunt. Ipsum nam nisl viverra semper sit. </p>

            <div className={styles.toolsSection__tools}>
              <div className={clsx(styles.tool, styles.nodeWot)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>node-wot</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='#' target='_blank'>
                    node-wot
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='#' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.playground)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>td playground</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://playground.thingweb.io' target='_blank'>
                    td playground
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/playground' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.dartWot)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faCode} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>dart-wot</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://pub.dev/packages/dart_wot' target='_blank'>
                    dart-wot
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/dart_wot' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.tdTools)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>td tools</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='#' target='_blank'>
                    td tools
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='#' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>

              <div className={clsx(styles.tool, styles.domusTdd)}>
                <div className={styles.tool__img}></div>
                <FontAwesomeIcon icon={faHouse} className={styles.tool__icon} />
                <h3 className={styles.tool__title}>domus-tdd</h3>
                <p className={styles.tool__description}>Convallis tellus tincidunt consequat nunc. Semper pretium ac amet nibh. </p>
                <div className={styles.tool__btnContainer}>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn)} href='https://github.com/eclipse-thingweb/domus-tdd-api' target='_blank'>
                    domus-tdd
                    <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                  </a>
                  <a className={clsx('btn', 'btn-tertiary', styles.btn, styles.btnGithub)} href='https://github.com/eclipse-thingweb/domus-tdd-api' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className={styles.communitySection}>
          <div className={clsx('container', styles.communitySection__container)}>
            <h2 className={clsx('hero-title', styles.communitySection__title)}>Join the Thingweb Community</h2>

            <div className={styles.communitySection__stats}>
              <div className={styles.stat}>
                <h3 className={clsx(styles.stat__number, 'hero-title')}>120+</h3>
                <p className={styles.stat__description}>Discord Members</p>
              </div>

              <div className={styles.stat}>
                <h3 className={clsx(styles.stat__number, 'hero-title')}>50+</h3>
                <p className={styles.stat__description}>GitHub Contributors</p>
              </div>

              <div className={styles.stat}>
                <h3 className={clsx(styles.stat__number, 'hero-title')}>X</h3>
                <p className={styles.stat__description}>Adopters</p>
              </div>
            </div>

            <div className={'scroller'} data-direction="left" data-speed="slow">
              <div className={styles.adopters} id='scroller-adopters' ref={scrollerAdoptersRef}>
                <h3 className={styles.adopters__logo}>BRAND</h3>
                <h3 className={styles.adopters__logo}>BRAND</h3>
                <h3 className={styles.adopters__logo}>BRAND</h3>
                <h3 className={styles.adopters__logo}>BRAND</h3>
                <h3 className={styles.adopters__logo}>BRAND</h3>
                <h3 className={styles.adopters__logo}>BRAND</h3>
              </div>
            </div>

            <div className={styles.communitySection__cta}>
              <a className={clsx('btn btn-primary', styles.btn)} href='https://github.com/eclipse-thingweb/website' target='_blank'>
                Contribute and Provide Feedback
                <FontAwesomeIcon icon={faGithub} className={styles.btn__icon} />
              </a>
              <a className={clsx('btn btn-primary btn-outline', styles.btn)} href='https://discord.gg/WfRyazju' target='_blank'>
                Chat with our Community
                <FontAwesomeIcon icon={faDiscord} className={styles.btn__icon} />
              </a>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}