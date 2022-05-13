<template>
  <div id="headerWrap">
    <div id="textWrap">
      <h1>发现属于你的房屋</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
       
      </p>
      \
    </div>
    <div id="imgWrap">
      <img id="imgHeader" src="../../assets/attachment.png" />
    </div>
  </div>
  <div id='searchCard'>
    <Card>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </template>
    </Card>
  </div>
  <p>Home</p>
</template>

<script>
export default {
  components: {},
  mounted() {
    console.log(process.env.VUE_APP_NOT_SECRET_CODE);
  },
};
</script>
<style>
#textWrap {
  width: 40vw;
  margin: 10px;
}
#textWrap > h1 {
  font-size: 2em;
}
#textWrap > p {
 
  font-size: 2vw;
}
#imgHeader {
  width: 35vw;
  height: 50vh;
  object-fit: cover;
}
#imgWrap {
  width: 40vw;
  height: fit-content;
  object-fit: contain;
  z-index: -100;
  background: #b6e2d3 no-repeat center;
  background-blend-mode: multiply;
  background-size: cover;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
#headerWrap {
  display: flex;
  margin: 4rem;
}
#searchCard{
    width: 50%;
    position: absolute;
    top:60vh;
    left:25%;
}
</style>
