import "./searchItem.css";
import { useNavigate } from "react-router-dom";



const SearchItem = (props) => {
  const navigate = useNavigate();
  const { Oferta, Establecimiento } = props
  const HandleClickItem = () => {
    navigate("/hotel/" + Oferta.Id,);
  };


  return (
    <div className="flex border border-gray-200 border-1 h-60 mb-3 rounded-md shadow-md ">
      <div class="w-4/12">
        <img src={Oferta.FotoPrincipal} class="w-full h-full object-cover rounded-l-md" />
      </div>
      <div class="w-8/12 pl-5 flex items-center">
        <div className="w-full pr-5">
          <div className="flex justify-between my-1">
            <h2 className="text-greenVE-600 font-semibold">{Establecimiento.Titulo}</h2>
            <div className="flex items-center">
              <h2 className={"text-white rounded-full px-3 py-1 text-xs"} style={{backgroundColor:Oferta.ColorBeneficio}}>{Oferta.Beneficio}</h2>
            </div>
          </div>
          <div className="flex content-between my-1">
          {Array(+(Establecimiento.Catalogacion)).fill(null).map((item)=>(
                    <svg height="18px" width="18px" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-yellow-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                ))}
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blueLight">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p class=" text-blueLight text-xs my-1" >{Oferta.Ciudad}, {Establecimiento.Pais}</p>
          </div>
          <div>
            <h2 className="text-block font-semibold">{Oferta.TituloOferta}</h2>
          </div>
          <div className="flex pt- items-center">
            <div className="w-3/4">
              <div className="flex items-center my-1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256" class="w-5 h-5 text-blueLight">
                  <g fill="#00a3ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)">
                    <path d="M23.97656,3.97852c-0.82766,0.01293 -1.48844,0.69381 -1.47656,1.52148v3c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-3c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852zM10.90234,9.4043c-0.61065,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l2.12109,2.12109c0.58626,0.58626 1.53678,0.58626 2.12305,0c0.58626,-0.58626 0.58626,-1.53678 0,-2.12305l-2.12109,-2.12109c-0.28328,-0.29067 -0.67225,-0.45415 -1.07812,-0.45312zM37.05078,9.4043c-0.38956,0.01135 -0.75941,0.17386 -1.03125,0.45313l-2.12109,2.12109c-0.58626,0.58626 -0.58626,1.53678 0,2.12305c0.58626,0.58626 1.53678,0.58626 2.12305,0l2.12109,-2.12109c0.44468,-0.43137 0.57845,-1.09172 0.33671,-1.66214c-0.24175,-0.57042 -0.80928,-0.93356 -1.4285,-0.91403zM24,13c-6.05737,0 -11,4.94264 -11,11c0,6.05736 4.94263,11 11,11c6.05737,0 11,-4.94264 11,-11c0,-6.05736 -4.94263,-11 -11,-11zM24,16c4.43605,0 8,3.56395 8,8c0,4.43605 -3.56395,8 -8,8c-4.43605,0 -8,-3.56395 -8,-8c0,-4.43605 3.56395,-8 8,-8zM5.5,22.5c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h3c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM39.5,22.5c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h3c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381zM13.00977,33.44531c-0.38956,0.01135 -0.75941,0.17386 -1.03125,0.45313l-2.12109,2.12109c-0.37938,0.37922 -0.5276,0.93205 -0.3888,1.45019c0.1388,0.51814 0.54351,0.92286 1.06165,1.06165c0.51814,0.1388 1.07097,-0.00942 1.45019,-0.3888l2.12109,-2.12109c0.44468,-0.43137 0.57845,-1.09172 0.33671,-1.66214c-0.24175,-0.57042 -0.80928,-0.93356 -1.4285,-0.91403zM34.94336,33.44531c-0.61064,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l2.12109,2.12109c0.58626,0.58626 1.53678,0.58626 2.12305,0c0.58626,-0.58626 0.58626,-1.53678 0,-2.12305l-2.12109,-2.12109c-0.28328,-0.29067 -0.67225,-0.45415 -1.07812,-0.45313zM23.97656,37.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v3c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-3c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z"></path></g></g>
                </svg>
                <p class=" text-black text-xs pl-1" >{Oferta.Dias} día(s)</p>
              </div>
              {
                Oferta.Noches ? (
                  <div className="flex items-center my-1">

                    <svg fill="none" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blueLight">
                      <path d="M13.3986 7.64605C13.495 7.37724 13.88 7.37724 13.9764 7.64605L14.2401 8.38111C14.271 8.46715 14.3395 8.53484 14.4266 8.56533L15.1709 8.82579C15.443 8.92103 15.443 9.30119 15.1709 9.39644L14.4266 9.65689C14.3395 9.68738 14.271 9.75507 14.2401 9.84112L13.9764 10.5762C13.88 10.845 13.495 10.845 13.3986 10.5762L13.1349 9.84112C13.104 9.75507 13.0355 9.68738 12.9484 9.65689L12.2041 9.39644C11.932 9.30119 11.932 8.92103 12.2041 8.82579L12.9484 8.56533C13.0355 8.53484 13.104 8.46715 13.1349 8.38111L13.3986 7.64605Z" fill="#00A3FF" />
                      <path d="M16.3074 10.9122C16.3717 10.733 16.6283 10.733 16.6926 10.9122L16.8684 11.4022C16.889 11.4596 16.9347 11.5047 16.9928 11.525L17.4889 11.6987C17.6704 11.7622 17.6704 12.0156 17.4889 12.0791L16.9928 12.2527C16.9347 12.2731 16.889 12.3182 16.8684 12.3756L16.6926 12.8656C16.6283 13.0448 16.3717 13.0448 16.3074 12.8656L16.1316 12.3756C16.111 12.3182 16.0653 12.2731 16.0072 12.2527L15.5111 12.0791C15.3296 12.0156 15.3296 11.7622 15.5111 11.6987L16.0072 11.525C16.0653 11.5047 16.111 11.4596 16.1316 11.4022L16.3074 10.9122Z" fill="#00A3FF" />
                      <path d="M17.7693 3.29184C17.9089 2.90272 18.4661 2.90272 18.6057 3.29184L19.0842 4.62551C19.1288 4.75006 19.2281 4.84805 19.3542 4.89219L20.7045 5.36475C21.0985 5.50263 21.0985 6.05293 20.7045 6.19081L19.3542 6.66337C19.2281 6.7075 19.1288 6.80549 19.0842 6.93005L18.6057 8.26372C18.4661 8.65284 17.9089 8.65284 17.7693 8.26372L17.2908 6.93005C17.2462 6.80549 17.1469 6.7075 17.0208 6.66337L15.6705 6.19081C15.2765 6.05293 15.2765 5.50263 15.6705 5.36475L17.0208 4.89219C17.1469 4.84805 17.2462 4.75006 17.2908 4.62551L17.7693 3.29184Z" fill="#00A3FF" />
                      <path clip-rule="evenodd" d="M10.2717 5.62789C10.4243 5.89494 10.3984 6.22811 10.2063 6.46836C9.4004 7.47646 8.92323 8.73845 8.92323 10.1084C8.92323 13.3758 11.6552 16.0609 15.0709 16.0609C16.009 16.0609 16.8957 15.8579 17.6886 15.496C17.9672 15.3689 18.2952 15.4239 18.5171 15.635C18.7389 15.8462 18.8101 16.1711 18.6968 16.4556C17.4607 19.562 14.3662 21.75 10.7598 21.75C6.08042 21.75 2.25 18.0585 2.25 13.4597C2.25 9.27676 5.421 5.84281 9.51439 5.25758C9.81888 5.21404 10.1191 5.36084 10.2717 5.62789ZM8.02561 7.20477C5.50445 8.23972 3.75 10.6606 3.75 13.4597C3.75 17.1897 6.86798 20.25 10.7598 20.25C13.101 20.25 15.1668 19.1398 16.4381 17.4421C15.9942 17.5202 15.5372 17.5609 15.0709 17.5609C10.8676 17.5609 7.42323 14.2445 7.42323 10.1084C7.42323 9.07816 7.63804 8.09677 8.02561 7.20477Z" fill="#00A3FF" fill-rule="evenodd" /></svg>
                    <p class=" text-black text-xs pl-1" >{Oferta.Noches} noche(s)</p>
                  </div>
                ) : (<></>)
              }

              <div className="flex items-center my-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" class="w-5 h-5 text-blueLight"><path d="M2 31a1 1 0 0 1-1-1 9 9 0 0 1 17.95-1H21c.74 0 1.43-.27 1.97-.74A2.99 2.99 0 0 0 24 26.2L24 26V14H13v6h-2v-7a1 1 0 0 1 .88-1H25a1 1 0 0 1 1 .88V15h4a1 1 0 0 1 1 .88V25a1 1 0 0 1-.88 1H26a4.99 4.99 0 0 1-1.71 3.77 4.98 4.98 0 0 1-3.03 1.22L21 31zm3.85-6.64a7 7 0 0 0-2.7 4.16l-.05.3-.03.18h4.1zM10 23c-.82 0-1.61.14-2.35.4l1.6 5.6h1.5l1.6-5.6a6.97 6.97 0 0 0-1.86-.38l-.25-.02zm4.15 1.36L12.82 29h4.1l-.02-.18a7 7 0 0 0-2.75-4.46zM29 17h-3v7h3zM20 1c0 2.06-.48 3.34-1.77 5.42l-.75 1.19C16.6 9 16.2 9.9 16.06 11h-2.02c.15-1.61.71-2.84 1.91-4.73l.57-.88c1.11-1.79 1.47-2.78 1.47-4.4zm5 0c0 2.06-.48 3.34-1.77 5.42l-.75 1.19C21.6 9 21.2 9.9 21.06 11h-2.02c.15-1.61.71-2.84 1.91-4.73l.57-.88c1.11-1.79 1.47-2.78 1.47-4.4z" fill="#00A3FF" ></path></svg>
                <p class=" text-black  text-xs pl-1" >Incluye desayuno</p>
              </div>
            </div>

            <div className="pl-4 w-3/4">
              <div className="flex items-center my-1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" class="w-5 h-5 text-blueLight">
                  <g fill="#00a3ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)">
                    <path d="M24.5,4c-4.77733,0 -8.69818,1.34381 -11.40625,3.9082c-2.70807,2.5644 -4.09375,6.27561 -4.09375,10.5918v3.75781c-1.14023,0.91044 -2,2.17286 -2,3.74219c0,2.36174 1.70447,4.27003 3.91992,4.78125c0.89653,3.55508 2.38692,6.722 4.48633,9.04688c2.30219,2.54943 5.30064,4.17188 8.59375,4.17188c3.29311,0 6.29156,-1.62244 8.59375,-4.17187c2.09941,-2.32488 3.5898,-5.49179 4.48633,-9.04687c2.21545,-0.51122 3.91992,-2.41951 3.91992,-4.78125c0,-1.56972 -0.8629,-2.82534 -2,-3.73047v-1.76953c0,-1.52771 -0.30709,-2.81541 -0.61133,-3.75391c1.34041,-0.76972 2.0158,-2.44498 1.31445,-3.91406c-2.50427,-5.23529 -7.93042,-8.83203 -15.20312,-8.83203zM24.5,7c6.3173,0 10.47236,2.89624 12.49609,7.12695c0.01959,0.04175 0.0162,0.05551 -0.05859,0.07813c-1.10628,0.33458 -3.78176,0.79492 -6.9375,0.79492c-3.8125,0 -6.34837,-0.71041 -7.9082,-1.37891c-1.55983,-0.6685 -2.03125,-1.18164 -2.03125,-1.18164c-0.36186,-0.36187 -0.88322,-0.51431 -1.38302,-0.40439c-0.49981,0.10993 -0.9091,0.46705 -1.08573,0.94736c0,0 -0.33429,1.03948 -2.00781,2.32813c-0.65692,0.5059 -0.77934,1.44855 -0.27344,2.10547c0.5059,0.65692 1.44855,0.77934 2.10547,0.27344c0.98165,-0.75589 1.5829,-1.52706 2.05664,-2.18945c0.49889,0.34549 0.49748,0.47688 1.43555,0.87891c1.94017,0.8315 4.9043,1.62109 9.0918,1.62109c2.19153,0 3.96302,-0.2029 5.48438,-0.45898c0.24497,0.69534 0.51563,1.66939 0.51563,2.95898v2.37891c-0.00035,0.57906 0.3326,1.10662 0.85547,1.35547c0.68717,0.32664 1.14453,0.96843 1.14453,1.76563c0,1.12234 -0.87766,2 -2,2c0.26471,0 0.24617,-0.00586 -0.06055,-0.00586c-0.70979,-0.00034 -1.32267,0.49681 -1.46875,1.19141c-0.74352,3.54312 -2.2342,6.56079 -4.10352,8.63086c-1.86931,2.07011 -4.0493,3.18359 -6.36719,3.18359c-2.31789,0 -4.49787,-1.11353 -6.36719,-3.18359c-1.86931,-2.07007 -3.36,-5.08774 -4.10352,-8.63086c-0.14608,-0.69459 -0.75896,-1.19174 -1.46875,-1.19141c-0.30671,0 -0.32526,0.00586 -0.06055,0.00586c-1.12234,0 -2,-0.87766 -2,-2c0,-0.80363 0.4615,-1.45833 1.14258,-1.78125c0.52363,-0.24829 0.85741,-0.77596 0.85742,-1.35547v-4.36328c0,-3.69181 1.11432,-6.48046 3.15625,-8.41406c2.04193,-1.9336 5.12108,-3.08594 9.34375,-3.08594zM19,24c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM29,24c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2z">
                    </path>
                  </g></g>
                </svg>
                <p class=" text-black text-xs pl-1" >{Oferta.Adultos} adulto(s)</p>
              </div>
              {
                Oferta.Ninos != null
                  ? (<div className="flex items-center my-1">
                    <svg fill="#00a3ff" class="w-5 h-5 text-blueLight" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><path d="M20.14 15.83A9.09 9.09 0 0 1 12 21a8.88 8.88 0 0 1-5.96-2.28 8.98 8.98 0 0 1-2.17-2.89A4.05 4.05 0 0 1 1 12c0-1.75 1.2-3.34 2.87-3.83A9.07 9.07 0 0 1 12 3a9.1 9.1 0 0 1 8.13 5.17A4.06 4.06 0 0 1 23 12c0 1.75-1.2 3.33-2.86 3.83zm-5.64-4.08c-.68 0-1.25-.57-1.25-1.25s.57-1.25 1.25-1.25 1.25.57 1.25 1.25-.57 1.25-1.25 1.25zm-5 0c-.68 0-1.25-.57-1.25-1.25s.57-1.25 1.25-1.25 1.25.57 1.25 1.25-.57 1.25-1.25 1.25zM19 14a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.1 0-.19.02-.29.03A7.1 7.1 0 0 0 12 5a7.08 7.08 0 0 0-6.71 5.03C5.19 10.02 5.1 10 5 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2 .1 0 .19-.02.29-.03A7.1 7.1 0 0 0 12 19c3.08 0 5.84-2.1 6.71-5.03.1.01.19.03.29.03zM7.5 14h9a4.9 4.9 0 0 1-4.5 3 4.9 4.9 0 0 1-4.5-3z"></path>
                    </svg>
                    <p class=" text-black text-xs pl-1" >{Oferta.Ninos} niño(s)</p>
                  </div>)
                  : (<></>)
              }

              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tax" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-blueLight">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="9" y1="14" x2="15" y2="8" />
                  <circle cx="9.5" cy="8.5" r=".5" fill="currentColor" />
                  <circle cx="14.5" cy="13.5" r=".5" fill="currentColor" />
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                </svg>
                <p class=" text-black  text-xs pl-1" >Incluye impuestos</p>
              </div>
            </div>

            <div className="w-full flex justify-end items-end">
              <div>
                <p class=" text-greenVE-600 font-bold  text-4xl text-center" >${Oferta.Final}</p>
                <p class=" text-red-500  text-sm text-center" >Ahorra {Math.round(100-(parseInt(Oferta.Final)*100)/parseInt(Oferta.Rack))}%</p>
                <button className="bg-greenVE-500 text-white px-2 py-1 rounded-xl text-sm" onClick={HandleClickItem}>Ver Oferta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
