<template>
    <div class="backdrop">
        <div class="model">
            <h1>{{header}}</h1>
<p>{{text}}</p>

        </div>
    </div>

</template>


<script>


export default {
  props:['header',"text"]
}
</script>

<style scoped>
.model{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
   
}
h1{
    color:aquamarine ;

}
</style>