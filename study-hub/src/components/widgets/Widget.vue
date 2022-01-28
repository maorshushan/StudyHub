<template>
  <Draggable handle=".dragger">
    <vs-card class="widget">
      <template #title class="grid">
        <vs-row justify="space-between">
          <vs-col w="6">
            <h2 v-if="!editing" class="widget-title">{{ name }}</h2>
            <vs-input v-else v-model="name" placeholder="Name" />
          </vs-col>
          <vs-col w="3">
              <vs-row>
                  <vs-col w="6">
            <vs-button @click="emitEdit" icon transparent color="dark">
              <i v-if="!editing" class="bx bxs-edit"></i>
              <i v-else class='bx bxs-save' ></i>
            </vs-button>
                  </vs-col>
                  <vs-col w="6">
            <vs-button class="dragger" icon transparent color="dark">
                <i class='bx bx-move' ></i>
            </vs-button>
                  </vs-col>
              </vs-row>
          </vs-col>
        </vs-row>
      </template>
      <template #text>
        <div><slot></slot></div>
      </template>
    </vs-card>
  </Draggable>
</template>

<script>
export default {
  name: "Widget",
  props: {
      startName : String
  },
  data: () => ({
    name: "",
    editing: false,
  }),
  mounted() {
      this.name = this.startName;
  },
  methods: {
      emitEdit() {
          this.editing=!this.editing;
          this.$emit('update:editing', this.editing);
      }
  }
};
</script>

<style scoped>
.widget {
  min-height: 5vh;
  min-width: 5vw;
}

.widget-title {
    padding-top: 8px;
}
</style>