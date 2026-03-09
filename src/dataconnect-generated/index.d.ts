import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddExperienceData {
  experience_insert: Experience_Key;
}

export interface AddExperienceVariables {
  company: string;
  title: string;
  startDate: DateString;
  endDate?: DateString | null;
  description?: string | null;
}

export interface Experience_Key {
  id: UUIDString;
  __typename?: 'Experience_Key';
}

export interface GetMyProfileData {
  user?: {
    id: UUIDString;
    name: string;
    email: string;
    bio?: string | null;
    phoneNumber?: string | null;
    linkedInUrl?: string | null;
    githubUrl?: string | null;
    websiteUrl?: string | null;
  } & User_Key;
}

export interface GetUserSkillsData {
  skills: ({
    id: UUIDString;
    name: string;
    category?: string | null;
  } & Skill_Key)[];
}

export interface GetUserSkillsVariables {
  userId: UUIDString;
}

export interface ListAllProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    imageUrl?: string | null;
    demoUrl?: string | null;
    repositoryUrl?: string | null;
    technologiesUsed?: string | null;
    user?: {
      id: UUIDString;
      name: string;
    } & User_Key;
  } & Project_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect): QueryPromise<GetMyProfileData, undefined>;

interface ListAllProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllProjectsData, undefined>;
  operationName: string;
}
export const listAllProjectsRef: ListAllProjectsRef;

export function listAllProjects(): QueryPromise<ListAllProjectsData, undefined>;
export function listAllProjects(dc: DataConnect): QueryPromise<ListAllProjectsData, undefined>;

interface AddExperienceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddExperienceVariables): MutationRef<AddExperienceData, AddExperienceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddExperienceVariables): MutationRef<AddExperienceData, AddExperienceVariables>;
  operationName: string;
}
export const addExperienceRef: AddExperienceRef;

export function addExperience(vars: AddExperienceVariables): MutationPromise<AddExperienceData, AddExperienceVariables>;
export function addExperience(dc: DataConnect, vars: AddExperienceVariables): MutationPromise<AddExperienceData, AddExperienceVariables>;

interface GetUserSkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserSkillsVariables): QueryRef<GetUserSkillsData, GetUserSkillsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserSkillsVariables): QueryRef<GetUserSkillsData, GetUserSkillsVariables>;
  operationName: string;
}
export const getUserSkillsRef: GetUserSkillsRef;

export function getUserSkills(vars: GetUserSkillsVariables): QueryPromise<GetUserSkillsData, GetUserSkillsVariables>;
export function getUserSkills(dc: DataConnect, vars: GetUserSkillsVariables): QueryPromise<GetUserSkillsData, GetUserSkillsVariables>;

