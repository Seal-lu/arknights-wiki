<template>
  <div>
    <div class="roleName"><p>夜半</p></div>
    <div class="info"></div>
    <div class="targrt">
      <svg width="100vw" height="100vh">
        <polyline
          points="900,140 940,100 1000,100"
          style="stroke: #5F5F5F; stroke-width: 2; fill: none"
        ></polyline>
        <circle
          id="mycircle"
          cx="900"
          cy="140"
          r="8"
          style="stroke: #5F5F5F; fill: none"
        />
        <circle
          id="mycircle"
          cx="900"
          cy="140"
          r="6"
          style="fill: #5F5F5F"
        />
        <!-- info -->
        <path
          d="
            M 210,510 
            V 410
            L 230,390
            H 460
            V 490
            L 440,510
            H 210
            Z"
          style="stroke: #5F5F5F; fill: none; stroke-width: 3"
        />
        <path
          d="
            M 200,500 
            V 400
            L 220,380
            H 450
            V 480
            L 430,500
            H 200
            Z"
          style="fill: #150D15"
        />
      </svg>
    </div>
    <img
      class="banner_role"
      src="https://prts.wiki/images/a/ac/%E7%AB%8B%E7%BB%98_%E5%A4%9C%E5%8D%8A_1.png"
      alt=""
    />
    <img
      class="back_role"
      src="https://prts.wiki/images/a/ac/%E7%AB%8B%E7%BB%98_%E5%A4%9C%E5%8D%8A_1.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
    name:'BannerTow'
};
</script>

<style lang="scss" scoped>
.roleName {
  position: absolute;
  top: 15%;
  right: 11%;
  border: 0.125rem solid #5F5F5F;
  text-align: center;
  line-height: 1.875rem;
  width: 5rem;
  height: 1.875rem;
  z-index: 999;
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
  left: 50%;
  position: absolute;
  height: 100%;
  z-index: 90;
}
.back_role {
  height: 200%;
  left: 15%;
  top: 10%;
  position: absolute;
  filter: brightness(0.6);
}
</style>