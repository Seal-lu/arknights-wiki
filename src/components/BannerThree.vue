<template>
  <div>
    <div class="roleName"><p>见行者</p></div>
    <div class="info"></div>
    <div class="targrt">
      <svg width="100vw" height="100vh">
        <polyline
          points="280,140 210,100 150,100"
          style="stroke: #F3E9E0; stroke-width: 2; fill: none"
        ></polyline>
        <circle
          id="mycircle"
          cx="280"
          cy="140"
          r="8"
          style="stroke: #F3E9E0; fill: none"
        />
        <circle
          id="mycircle"
          cx="280"
          cy="140"
          r="6"
          style="fill: #F3E9E0"
        />
        <!-- info -->
        <path
          d="
              M 810,510 
              V 410
              L 830,390
              H 1060
              V 490
              L 1040,510
              H 810
              Z"
          style="stroke: #F3E9E0; fill: none; stroke-width: 3"
        />
        <path
          d="
            M 800,500 
            V 400
            L 820,380
            H 1050
            V 480
            L 1030,500
            H 800
            Z"
          style="fill: #152c3d;"
        />
      </svg>
    </div>
    <img
      class="banner_role"
      src="https://prts.wiki/images/5/54/%E7%AB%8B%E7%BB%98_%E8%A7%81%E8%A1%8C%E8%80%85_1.png"
      alt=""
    />
    <img
      class="back_role"
      src="https://prts.wiki/images/5/54/%E7%AB%8B%E7%BB%98_%E8%A7%81%E8%A1%8C%E8%80%85_1.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
    name:'BannerThree'
};
</script>

<style lang="scss" scoped>
.roleName {
  position: absolute;
  top: 15%;
  left: 5%;
  border: 0.125rem solid #F3E9E0;
  text-align: center;
  line-height: 1.875rem;
  width: 5rem;
  height: 1.875rem;
  p {
    color: #f2f2f2;
  }
}
.targrt {
  position: relative;
  z-index: 999;
}
.banner_role {
  top: 0%;
  position: absolute;
  height: 100%;
  z-index: 90;
}
.back_role {
  height: 200%;
  right: 15%;
  top: 10%;
  position: absolute;
  filter: brightness(0.6);
}
</style>