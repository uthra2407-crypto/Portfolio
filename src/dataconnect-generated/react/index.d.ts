import { GetMyProfileData, ListAllProjectsData, AddExperienceData, AddExperienceVariables, GetUserSkillsData, GetUserSkillsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetMyProfile(options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;
export function useGetMyProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;

export function useListAllProjects(options?: useDataConnectQueryOptions<ListAllProjectsData>): UseDataConnectQueryResult<ListAllProjectsData, undefined>;
export function useListAllProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllProjectsData>): UseDataConnectQueryResult<ListAllProjectsData, undefined>;

export function useAddExperience(options?: useDataConnectMutationOptions<AddExperienceData, FirebaseError, AddExperienceVariables>): UseDataConnectMutationResult<AddExperienceData, AddExperienceVariables>;
export function useAddExperience(dc: DataConnect, options?: useDataConnectMutationOptions<AddExperienceData, FirebaseError, AddExperienceVariables>): UseDataConnectMutationResult<AddExperienceData, AddExperienceVariables>;

export function useGetUserSkills(vars: GetUserSkillsVariables, options?: useDataConnectQueryOptions<GetUserSkillsData>): UseDataConnectQueryResult<GetUserSkillsData, GetUserSkillsVariables>;
export function useGetUserSkills(dc: DataConnect, vars: GetUserSkillsVariables, options?: useDataConnectQueryOptions<GetUserSkillsData>): UseDataConnectQueryResult<GetUserSkillsData, GetUserSkillsVariables>;
