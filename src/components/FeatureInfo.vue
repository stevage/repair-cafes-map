<template lang="pug">
#FeatureInfo
    div.ba.b--gray.pa2.br3.shadow-1.box(:class="{ [p.Category.replace(' ', '')]: true }" v-if="feature")
        .f6.ttu.b.category(:class="{ [p.Category.replace(' ', '')]: true }") {{ p.Category }}
        h1.f4 {{ p.Name }}
        p.i {{ p.Hours }}
        
        p {{ p.Notes }}
        p {{ p.Address }}
        div(v-if="p.Link")
            div
                a(:href="p.Link" target="_blank") More information
            div(v-if="p['Link 2']")
                a(:href="p['Link 2']" target="_blank") See also
    div(v-else)
        h2 Click a repair cafe for information.


</template>

<script>
export default {
    name: "FeatureInfo",
    data: () => ({
        feature: undefined,
        ignoreProps: ['id','Longitude','Latitude', 'image_url']
    }),
    computed: {
        imageUrl() {
            return this.feature && this.feature.properties.image_url
        }, p() {
            if (!this.feature) {
                return {Category:''}
            } else {
                return this.feature.properties;
            }
        }
    },
    created() {
        window.FeatureInfo = this;
    }
}
</script>

<style scoped>
#FeatureInfo th {
    text-align:  right;
}

.image {
    width: 100%;
}

.category.Repairgroup {
    color: hsl(330,100%,40%);
}
.category.Sharingcentre {
    color: hsl(210,100%,40%);
}

.box.Repairgroup {
    background: hsl(330,100%,97%);
}
.box.Sharingcentre {
    background: hsl(210,100%,95%);
}

</style>