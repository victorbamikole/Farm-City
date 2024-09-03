/**
 * Generates action types
 * @param name A unique identifier for the action type
 * @return The generated action type
 */
const typeGenerator = (name: string): Record<string, string> => ({
  loading: `${name}_LOADING`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
  saveFormData: `${name}_SAVE_FORM_DATA`,
});

export const action = (type: string, data: any): { type: string; data: any } => ({ type, data });

export default typeGenerator;
