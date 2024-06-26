import { createStore } from 'vuex'
import axios from 'axios'
const portfolioURL = " https://chelsea-julie.github.io/vueEOMP/data"
import swal from 'sweetalert2/dist/sweetalert2'
export default createStore({
  state: {
    jobtitle:  null,
    about: null,
    education: null,
    experience: null,
    projects: null,
    testimonial: null,
    skills: null
  },
  getters: {
  },
  mutations: {
    setJobtitle(state, value) {
      state.jobtitle = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setExperience(state, value) {
      state.experience = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonial(state, value) {
      state.testimonial = value
    },
    setSkills(state, value) {
      state.skills = value
    }
  },
  actions: {
    async fetchJobTitle(context) {
      try {

        let {jobtitle} = (await axios.get(portfolioURL)).data
        context.commit('setJobtitle', jobtitle)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch job title",
         icon:"error",
         timer: 2000
        })
      }

    },
    async fetchAbout(context) {
      try {

        let {about} = (await axios.get(portfolioURL)).data
        context.commit('setAbout', about)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch about",
         icon:"error",
         timer: 2000
        })
      }

    },
    async fetchEducation(context) {
      try {

        let {education} = (await axios.get(portfolioURL)).data
        context.commit('setEducation', education)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch education",
         icon:"error",
         timer: 2000
        })
      }

    },
    async fetchExperience(context) {
      try {

        let {experience} = (await axios.get(portfolioURL)).data
        context.commit('setExperience', experience)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch experience",
         icon:"error",
         timer: 2000
        })
      }

    },
    async fetchProjects(context) {
      try {

        let {projects} = (await axios.get(portfolioURL)).data
        context.commit('setProjects', projects)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch projects",
         icon:"error",
         timer: 2000
        })
      }

    },
    async fetchTestimonials(context) {
      try {

        let {testimonials} = (await axios.get(portfolioURL)).data
        context.commit('setTestimonials', testimonials)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch testimonials",
         icon:"error",
         timer: 2000
        })
      }

    },
    async fetchSkills(context) {
      try {

        let {skills} = (await axios.get(portfolioURL)).data
        context.commit('setSkills', skills)
      } catch (e) { 
        swal.fire({
         title: "Error",
         text:"Fail to fetch skills",
         icon:"error",
         timer: 2000
        })
      }

    }

  },
  modules: {
  },

})
