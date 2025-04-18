export const DEFAULT_ROBOTOFF_CONFIGURATION = {
  apiUrl: "https://robotoff.openfoodfacts.org/api/v1",
  dryRun: false,
  imgUrl: "https://images.openfoodfacts.org/images/products",
}
export const DEFAULT_NUTRIPATROL_CONFIGURATION = {
  apiUrl: "https://nutripatrol.openfoodfacts.org",
  dryRun: false,
}
export const PAGE_SIZE = 25

export enum EventType {
  SUBMIT = "submit",
  QUESTION_STATE = "question-state",
  NUTRIENT_STATE = "nutrient-state",
}

export enum LoadingState {
  NOT_LOADED = "not-loaded",
  LOADING = "loading",
  LOADED = "loaded",
}

export const DEFAULT_LANGUAGE_CODE = "en"

export enum EventState {
  LOADING = "loading",
  NO_DATA = "no-data",
  HAS_DATA = "has-data",
  ANNOTATED = "annotated",
}

export const DEFAULT_ASSETS_IMAGES_PATH = "/assets/images"

export const SELECT_ICON_FILE_NAME = "carret-bottom.svg"
