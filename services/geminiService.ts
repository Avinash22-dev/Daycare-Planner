
import { GoogleGenAI, Type } from "@google/genai";
import type { ChildInfo, RoutineItem } from '../types';

const MODEL_NAME = 'gemini-2.5-flash';

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const routineSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      timeRange: {
        type: Type.STRING,
        description: "The time range for the activity, e.g., '9:00 AM - 10:00 AM'."
      },
      activity: {
        type: Type.STRING,
        description: "The name of the activity, e.g., 'Creative Arts & Crafts'."
      },
      description: {
        type: Type.STRING,
        description: "A short, engaging description of the activity for the child."
      },
      activityType: {
        type: Type.STRING,
        enum: ['meal', 'play', 'learn', 'nap', 'outdoor', 'transition'],
        description: "The category of the activity."
      }
    },
    required: ["timeRange", "activity", "description", "activityType"]
  }
};

const generatePrompt = (info: ChildInfo): string => {
  return `
    Create a personalized and detailed daycare routine for a child with the following characteristics. The routine should be structured, engaging, and age-appropriate, covering the entire day from their wake-up time to bedtime.

    Child's Details:
    - Name: ${info.name}
    - Age Group: ${info.age}
    - Wakes Up: ${info.wakeUpTime}
    - Goes to Bed: ${info.bedTime}
    - Nap Schedule: ${info.napSchedule === 'one-long' ? 'One long nap in the middle of the day' : info.napSchedule === 'two-short' ? 'Two shorter naps, one in the morning and one in the afternoon' : 'No nap during the day'}
    - Interests: ${info.interests}
    - Dietary Needs/Notes: ${info.dietaryNeeds}

    Instructions:
    1.  Generate a sequence of activities for the day.
    2.  Each activity must have a specific time range, a title, a short description, and an activity type.
    3.  The activities should be varied and include meals, different types of play (creative, sensory, physical), learning sessions, outdoor time (if applicable), and quiet/nap times.
    4.  Tailor the activities to the child's age and specified interests. For example, if the child likes building blocks, include a block-building activity.
    5.  Factor in the dietary needs for all meal and snack times.
    6.  Ensure the schedule flows logically from wake-up to bedtime.
    7.  The output must be a JSON array of activity objects conforming to the provided schema.
  `;
};

export const generateRoutine = async (info: ChildInfo): Promise<RoutineItem[]> => {
  try {
    const prompt = generatePrompt(info);
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: routineSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const routine = JSON.parse(jsonText);
    
    // Basic validation
    if (!Array.isArray(routine)) {
      throw new Error("API did not return a valid array.");
    }

    return routine as RoutineItem[];

  } catch (error) {
    console.error("Error generating routine:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate routine from AI. Reason: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the routine.");
  }
};
