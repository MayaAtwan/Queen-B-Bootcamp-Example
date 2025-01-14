import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/mentors";

const mentorService = {
  registerMentor: async (mentorData) => {
    try {
      const response = await axios.post(API_URL, mentorData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response.data;
    }
  },

  getMentors: async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteMentorById: async (mentorId) => {
    try {
      const response = await axios.delete(`${API_URL}/${mentorId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  searchMentorsBySkill: async (skills) => {
    try {
      const response = await axios.get(`${API_URL}/search/${skills}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getMentorById: async (mentorId) => {
    try {
      const response = await axios.get(`${API_URL}/${mentorId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data[0];
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default mentorService;
