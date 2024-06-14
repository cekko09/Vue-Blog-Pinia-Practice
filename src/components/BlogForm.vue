<template>
  <div>
    <h2>{{ blog ? 'Edit' : 'Add' }} Blog</h2>
    <form @submit.prevent="onSubmit" class="d-flex flex-column">
      <div class="row">
        <div class="col-md-4">
          <input class="form-control m-2" v-model="form.title" placeholder="Title" required />
          <textarea
            class="form-control m-2"
            v-model="form.description"
            placeholder="Description"
            required
          ></textarea>
          <input
            class="form-control m-2"
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            accept="image/*"
          />
          <img
            class="form-control m-2"
            v-if="form.imageUrl"
            :src="form.imageUrl"
            alt="Selected Image"
            style="max-width: 300px; max-height: 300px; margin-bottom: 10px"
          />
          <button class="btn btn-primary m-2" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useBlogStore } from '../stores/index.js'
import { ref } from 'vue'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  blog: Object
})
const store = useBlogStore()
const form = ref({
  title: props.blog ? props.blog.title : '',
  description: props.blog ? props.blog.description : '',
  imageUrl: props.blog ? props.blog.imageUrl : ''
})

const fileInput = ref(null)

const handleFileChange = () => {
  const file = fileInput.value.files[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      form.value.imageUrl = reader.result
    }
  }
}

const onSubmit = () => {
  if (props.blog) {
    store.updateBlog(props.blog.id, form.value)
    router.push({ name: 'blog-view', params: { id: props.blog.id } })
  } else {
    store.addBlog(form.value)
    router.push({ name: 'home' })
  }
  // Reset form fields after submission
  form.value.title = ''
  form.value.description = ''
  form.value.imageUrl = ''
  // Reset file input field
  if (fileInput.value) fileInput.value.value = ''
}
</script>
