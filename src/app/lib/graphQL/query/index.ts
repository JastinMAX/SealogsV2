import { from } from '@apollo/client'

export * from './CREW_DUTY'
export * from './CREW_DUTY_BY_ID'
export * from './CREW_LIST'
export * from './CREW_TRAINING_LOCATIONS'
export * from './CREW_TRAINING_TYPES'
export * from './GET_CLIENT_BY_ID'
export * from './GET_CREW_BY_IDS'
export * from './GET_CREW_BY_LOGENTRY_ID'
export * from './GET_CREW_TRAINING_CONFIG'
export * from './GET_CREW_TRAINING_LISTS'
export * from './GET_LOGBOOKENTRY'
export * from './GET_LOGBOOK_ENTRY_BY_ID'
export * from './GET_VESSEL_CONFIG'
export * from './READ_ONE_CLIENT'
export * from './READ_ONE_SEALOGS_GROUP'
export * from './READ_ONE_SEALOGS_MEMBER'
export * from './READ_ONE_TRAINING_SESSION_DUE'
export * from './READ_PERMISSION_TYPES'
export * from './READ_TRAINING_SESSION_DUES'
export * from './GET_SEALOGS_GROUP'
export * from './GET_SEALOGS_MEMBER_COMMENTS'
export * from './VESSEL_LIST'
export * from './VESSEL_INFO'
export * from './GET_INVENTORIES'
export * from './GET_INVENTORY_BY_VESSEL_ID'
export * from './GET_INVENTORY_CATEGORY'
export * from './GET_INVENTORY_BY_ID'
export * from './GET_SUPPLIER'
export * from './GET_SUPPLIER_BY_ID'
export * from './GET_INVENTORY_CATEGORY_BY_ID'
export * from './TRAINING_LOCATIONS'
export * from './TRAINING_SESSION_BY_ID'
export * from './TRAINING_SESSION_BY_VESSEL'
export * from './TRAINING_SESSIONS'
export * from './TRAINING_TYPE_BY_ID'
export * from './GET_FILES'
export * from './GET_MAINTENANCE_CHECK'
export * from './GetVesselLastFuel'
export * from './GetOpenLogEntries'
export * from './GET_MAINTENANCE_CHECK_BY_ID'
export * from './GET_MAINTENANCE_CHECK_BY_MEMBER_ID'
export * from './GET_MAINTENANCE_CHECK_BY_VESSEL_ID'
export * from './GET_MAINTENANCE_CHECK_SUBTASK'
export * from './TRAINING_TYPES'
export * from './GET_MEMBER_TRAINING_SIGNATURES'
export * from './GET_ENGINES'
export * from './GET_FUELTANKS'
export * from './GET_WATERTANKS'
export * from './GET_SEWAGESYSTEMS'
export * from './GET_LOGBOOK'
export * from './GET_LOGBOOK_CONFIG'
export * from './GET_SECTION_MEMBER_COMMENTS'
export * from './GET_GEO_LOCATIONS'
export * from './GET_EVENT_TYPES'
export * from './DASHBOARD_VESSEL_LIST'
export * from './logEntrySections/GetTripIdsByVesselID'
export * from './logEntrySections/GetTripEvent'
export * from './logEntrySections/GetTripEvent_VesselRescue'
export * from './logEntrySections/GetTripEvent_PersonRescue'
export * from './logEntrySections/AssetReporting_LogBookEntrySection'
export * from './logEntrySections/CrewMembers_LogBookEntrySection'
export * from './logEntrySections/CrewTraining_LogBookEntrySection'
export * from './logEntrySections/Engineer_LogBookEntrySection'
export * from './logEntrySections/Engine_LogBookEntrySection'
export * from './logEntrySections/Fuel_LogBookEntrySection'
export * from './logEntrySections/Ports_LogBookEntrySection'
export * from './logEntrySections/Supernumerary_LogBookEntrySection'
export * from './logEntrySections/TripReport_LogBookEntrySection'
export * from './logEntrySections/DetailedTripReport_LogBookEntrySection'
export * from './logEntrySections/TripReport_LogBookEntrySection_Brief'
export * from './logEntrySections/VesselDailyCheck_LogBookEntrySection'
export * from './logEntrySections/VoyageSummary_LogBookEntrySection'
export * from './logEntrySections/CrewWelfare_LogBookEntrySection'
export * from './logEntrySections/LogBookSignOff_LogBookEntrySection'
export * from './logEntrySections/TowingChecklist'
export * from './logEntrySections/BarCrossingChecklist'
export * from './logEntrySections/GetRiskFactors'
export * from './logEntrySections/Get_EventType_TaskingChecklist'
export * from './logEntrySections/GetTripReport_Stop'
export * from './logEntrySections/GetOneDangerousGoodsRecord'
export * from './logEntrySections/GetDangerousGoodsRecords'
export * from './logEntrySections/GetOneDangerousGoodsChecklist'
export * from './logEntrySections/GetTaskRecords'
export * from './logEntrySections/GET_ENGINE_IDS_BY_VESSEL'
export * from './logEntrySections/GetMaintenanceCategories'
export * from './logEntrySections/GetLogBookEntriesMemberIds'
export * from './logEntrySections/GetCrewMembersFromOpenLogBook'
export * from './GET_RECURRING_TASK'
export * from './GET_MAINTENANCE_CATEGORY'
export * from './GET_MAINTENANCE_CATEGORY_BY_ID'
export * from './department/ReadDepartments'
export * from './department/ReadOneDepartment'
export * from './GET_SEA_TIME_REPORT'
export * from './VESSEL_LIST_WITH_DOCUMENTS'
export * from './INVENTORIES_WITH_DOCUMENTS'
export * from './MAINTENANCE_LIST_WITH_DOCUMENT'
export * from './GET_VESSEL_POSITION'
export * from './GetFavoriteLocations'
export * from './GET_ALL_LOGBOOK_ENTRIES'
export * from './geolocation/ReadOneGeoLocation'
export * from './logEntrySections/ReadOneEventType_Supernumerary'
export * from './weather/ReadWeatherForecasts'
export * from './weather/ReadWeatherTides'
export * from './weather/ReadWeatherObservations'
export * from './weather/ReadOneWeatherObservation'