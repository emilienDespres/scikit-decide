(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{558:function(t,e,a){"use strict";a.r(e);var s=a(38),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"builders-domain-scheduling-scheduling-domains-modelling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builders-domain-scheduling-scheduling-domains-modelling"}},[t._v("#")]),t._v(" builders.domain.scheduling.scheduling_domains_modelling")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#schedulingactionenum"}},[t._v("SchedulingActionEnum")])]),a("li",[a("a",{attrs:{href:"#state"}},[t._v("State")]),a("ul",[a("li",[a("a",{attrs:{href:"#constructor-badge-text-state-type-tip"}},[t._v("Constructor "),a("Badge",{attrs:{text:"State",type:"tip"}})],1)])])]),a("li",[a("a",{attrs:{href:"#schedulingaction"}},[t._v("SchedulingAction")]),a("ul",[a("li",[a("a",{attrs:{href:"#constructor-badge-text-schedulingaction-type-tip"}},[t._v("Constructor "),a("Badge",{attrs:{text:"SchedulingAction",type:"tip"}})],1)])])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("skdecide-summary")],1),t._v(" "),a("h2",{attrs:{id:"schedulingactionenum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulingactionenum"}},[t._v("#")]),t._v(" SchedulingActionEnum")]),t._v(" "),a("p",[t._v("Enum defining the different types of scheduling actions:")]),t._v(" "),a("ul",[a("li",[t._v("START: start a task")]),t._v(" "),a("li",[t._v("PAUSE: pause a task")]),t._v(" "),a("li",[t._v("RESUME: resume a task")]),t._v(" "),a("li",[t._v("TIME_PR: do not apply actions on tasks and progress in time")])]),t._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("p",[t._v("Class modelling a scheduling state and used by sk-decide scheduling domains.")]),t._v(" "),a("p",[t._v("It contains the following information:\nt: the timestamp.\ntask_ids: a list of all task ids in the scheduling domain.\ntasks_remaining: a set containing the ids of tasks still to be started\ntasks_ongoing: a set containing the ids of tasks started and not paused and still to be completed\ntasks_complete: a set containing the ids of tasks that have been completed\ntasks_paused: a set containing the ids of tasks that have been started and paused but not resumed yet\ntasks_progress: a dictionary where the key is a task id (int) and\nthe value the progress of the task between 0 and 1 (float)\ntasks_mode: a dictionary where the key is a task id (int) and\nthe value the mode used to execute the task (int)\nresource_to_task: dictionary where the key is the name of a resource (str) and the value a task\nit is currently assigned to (int)\nresource_availability: dictionary where the key is the name of a resource (str) and the value the number of\nresource units available for this type of resource regardless of the task assignments (int). Where the\nresource name is a resource unit itself, the availability value takes a value of either 1 (available)\nor 0 (unavailable)\nresource_used: dictionary where the key is the name of a resource (str) and the value the number of\nresource units for this resource type used/assigned on tasks at this time (int). Where the resource\nname is a resource unit itself, the value takes a value of either 1 (used) or 0 (not used)\nresource_used_for_task: nested dictionary where the first key is a task id (int), the second key is the name of\na resource (str) and the value is the number of resource units for this resource type used/assigned on tasks\nat this time (int). Where the resource name is a resource unit itself, the value takes a value of either 1\n(used) or 0 (not used).\ntasks_details: dictionary where the key is the id of a task (int) and the value a Task object. This Task object\ncontains information about the task execution and can be used to post-process the run. It is only used\nby the domain to store execution information and not used by scheduling solvers.\n_current_conditions: set of conditions observed so far, to be used by domains with WithConditionalTask\nproperties")]),t._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" Constructor "),a("Badge",{attrs:{text:"State",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"State",sig:{params:[{name:"task_ids",annotation:"List[int]"},{name:"tasks_available",default:"None",annotation:"Set[int]"}]}}}),t._v(" "),a("p",[t._v("Initialize a scheduling state.")]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("task_ids")]),t._v(": a list of all task ids in the scheduling domain.")]),t._v(" "),a("li",[a("strong",[t._v("tasks_available")]),t._v(": a set of task ids that are available for scheduling. This may differ from task_ids if the\ndomain contains conditional tasks.")])]),t._v(" "),a("h2",{attrs:{id:"schedulingaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulingaction"}},[t._v("#")]),t._v(" SchedulingAction")]),t._v(" "),a("p",[t._v("Can be used to define actions on single task. Resource allocation can only be managed through changes in the mode.\nThe time_progress attribute triggers a change in time (i.e. triggers the domain to increment its current time).\nIt should thus be used as the last action to be applied at any point in time\nThese actions are enumerable due to their coarse grain definition.")]),t._v(" "),a("p",[t._v("E.g.\ntask = 12 (start action 12 in mode 1)\naction = EnumerableActionEnum.START\nmode = 1\ntime_progress = False")]),t._v(" "),a("p",[t._v("E.g. (pause action 13, NB: mode info is not useful here)\ntask = 13\naction = EnumerableActionEnum.PAUSE\nmode = None\ntime_progress = False")]),t._v(" "),a("p",[t._v("E.g. (do nothing and progress in time)\ntask = None\naction = None\nmode = None\ntime_progress = True")]),t._v(" "),a("h3",{attrs:{id:"constructor-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor-2"}},[t._v("#")]),t._v(" Constructor "),a("Badge",{attrs:{text:"SchedulingAction",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"SchedulingAction",sig:{params:[{name:"task",annotation:"Union[int, None]"},{name:"action",annotation:"SchedulingActionEnum"},{name:"mode",annotation:"Union[int, None]"},{name:"time_progress",annotation:"bool"},{name:"resource_unit_names",default:"None",annotation:"Optional[Set[str]]"}]}}}),t._v(" "),a("p",[t._v("Initialize self.  See help(type(self)) for accurate signature.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);