import { createStore } from 'vuex'
import axios from 'axios'
const portfolioURL = "https://awhendr261101.github.io/vueMockEOMP/data/resources.json"
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

    async fetchJobtitle(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setJobtitle", res.jobTitle)
        console.log(res.jobTitle);
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchAbout(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", res.About)
        console.log(res.About);
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchEducation(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", res.education)
        console.log(res.education);
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    
    // async fetchEducation(context) { 
    //   try {  
    //     let {education} = await (await axios.get(portfolioURL)).data
    //     context.commit("seteducation", education)
    //   } catch(e) {
    //   swal.fire ({
    //     title: "Error",
    //     text: "Unable  to fetch job title",
    //     icon: "error",
    //     timer: 2000,
    //   })
    // }
    // },
    // async fetchExperience(context) { 
    //   try {  
    //     let {experience} = await (await axios.get(portfolioURL)).data
    //     context.commit("setexperience", experience)
    //   } catch(e) {
    //   swal.fire ({
    //     title: "Error",
    //     text: "Unable  to fetch job title",
    //     icon: "error",
    //     timer: 2000,
    //   })
    // }
    // },
    // async fetchSkills(context) { 
    //   try {  
    //     let {skills} = await (await axios.get(portfolioURL)).data
    //     context.commit("setskills", skills)
    //   } catch(e) {
    //   swal.fire ({
    //     title: "Error",
    //     text: "Unable  to fetch job title",
    //     icon: "error",
    //     timer: 2000,
    //   })
    // }
    // },
    // async fetchTestimonials(context) { 
    //   try {  
    //     let {testimonials} = await (await axios.get(portfolioURL)).data
    //     context.commit("settestimonials", testimonials)
    //   } catch(e) {
    //   swal.fire ({
    //     title: "Error",
    //     text: "Unable  to fetch job title",
    //     icon: "error",
    //     timer: 2000,
    //   })
    // }
    // },
    // async fetchProject(context) { 
    //   try {  
    //     let {project} = await (await axios.get(portfolioURL)).data
    //     context.commit("setproject", project)
    //   } catch(e) {
    //   swal.fire ({
    //     title: "Error",
    //     text: "Unable  to fetch job title",
    //     icon: "error",
    //     timer: 2000,
    //   })
    // }
    // }
    },
  modules: {
  },

})
