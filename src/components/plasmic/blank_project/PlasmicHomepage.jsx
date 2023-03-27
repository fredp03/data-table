// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: djpvpjtZ4FmRDKZha87hg2
// Component: SDjAhRo2w7sD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: djpvpjtZ4FmRDKZha87hg2/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: SDjAhRo2w7sD/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"tableData"}
            data-plasmic-override={overrides.tableData}
            className={classNames(projectcss.all, sty.tableData)}
          >
            <DataFetcher
              data-plasmic-name={"httpRestApiFetcher"}
              data-plasmic-override={overrides.httpRestApiFetcher}
              className={classNames("__wab_instance", sty.httpRestApiFetcher)}
              dataName={"fetchedData"}
              errorDisplay={
                <ph.DataCtxReader>
                  {$ctx => "Error fetching data"}
                </ph.DataCtxReader>
              }
              headers={[]}
              loadingDisplay={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      data-plasmic-name={"stdev2"}
                      data-plasmic-override={overrides.stdev2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.stdev2
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              method={"GET"}
              noLayout={false}
              url={
                "https://raw.githubusercontent.com/fredp03/test-data/main/Output.json"
              }
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <React.Fragment>
                    {true ? (
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"freeBox"}
                        data-plasmic-override={overrides.freeBox}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.freeBox)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__frv8R
                          )}
                        >
                          {"1"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__eb0Tk
                          )}
                        >
                          {"2"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pGq14
                          )}
                        >
                          {"3"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__zKFd
                          )}
                        >
                          {"4"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qgPoL
                          )}
                        >
                          {"5"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__b6YCp
                          )}
                        >
                          {"6"}
                        </div>
                      </p.Stack>
                    ) : null}
                    {true ? (
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"trapTimes"}
                        data-plasmic-override={overrides.trapTimes}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.trapTimes)}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"avgTimes"}
                            data-plasmic-override={overrides.avgTimes}
                            hasGap={true}
                            className={classNames(projectcss.all, sty.avgTimes)}
                          >
                            <div
                              data-plasmic-name={"trapData"}
                              data-plasmic-override={overrides.trapData}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trapData
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][0][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trapData2"}
                              data-plasmic-override={overrides.trapData2}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trapData2
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][0][2];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trapData3"}
                              data-plasmic-override={overrides.trapData3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trapData3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][0][3];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trapData4"}
                              data-plasmic-override={overrides.trapData4}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trapData4
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][0][4];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trapData5"}
                              data-plasmic-override={overrides.trapData5}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trapData5
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][0][5];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trapData6"}
                              data-plasmic-override={overrides.trapData6}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trapData6
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][0][6];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                          </p.Stack>
                        ) : null}
                        {true ? (
                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"avgTimeStdev"}
                            data-plasmic-override={overrides.avgTimeStdev}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.avgTimeStdev
                            )}
                          >
                            <div
                              data-plasmic-name={"timeStdevTrap1"}
                              data-plasmic-override={overrides.timeStdevTrap1}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.timeStdevTrap1
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][1][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"timeStdevTrap2"}
                              data-plasmic-override={overrides.timeStdevTrap2}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.timeStdevTrap2
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][1][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"timeStdevTrap3"}
                              data-plasmic-override={overrides.timeStdevTrap3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.timeStdevTrap3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][1][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"timeStdevTrap4"}
                              data-plasmic-override={overrides.timeStdevTrap4}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.timeStdevTrap4
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][1][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"timeStdevTrap5"}
                              data-plasmic-override={overrides.timeStdevTrap5}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.timeStdevTrap5
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][1][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"timeStdevTrap6"}
                              data-plasmic-override={overrides.timeStdevTrap6}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.timeStdevTrap6
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][1][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                          </p.Stack>
                        ) : null}
                        {true ? (
                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"avgTimesLast3"}
                            data-plasmic-override={overrides.avgTimesLast3}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.avgTimesLast3
                            )}
                          >
                            <div
                              data-plasmic-name={"trap1TimeLast3"}
                              data-plasmic-override={overrides.trap1TimeLast3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][2][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap2TimeLast3"}
                              data-plasmic-override={overrides.trap2TimeLast3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap2TimeLast3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][2][2];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap3TimeLast3"}
                              data-plasmic-override={overrides.trap3TimeLast3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap3TimeLast3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][2][3];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap4TimeLast3"}
                              data-plasmic-override={overrides.trap4TimeLast3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap4TimeLast3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][2][4];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap5TimeLast3"}
                              data-plasmic-override={overrides.trap5TimeLast3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap5TimeLast3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][2][5];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap6TimeLast3"}
                              data-plasmic-override={overrides.trap6TimeLast3}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap6TimeLast3
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][2][6];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                          </p.Stack>
                        ) : null}
                        {true ? (
                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"avgTimesLast3Stdev"}
                            data-plasmic-override={overrides.avgTimesLast3Stdev}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.avgTimesLast3Stdev
                            )}
                          >
                            <div
                              data-plasmic-name={"trap1TimeLast4"}
                              data-plasmic-override={overrides.trap1TimeLast4}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast4
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][3][1];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap1TimeLast5"}
                              data-plasmic-override={overrides.trap1TimeLast5}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast5
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][3][2];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap1TimeLast6"}
                              data-plasmic-override={overrides.trap1TimeLast6}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast6
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][3][3];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap1TimeLast7"}
                              data-plasmic-override={overrides.trap1TimeLast7}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast7
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][3][4];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap1TimeLast8"}
                              data-plasmic-override={overrides.trap1TimeLast8}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast8
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][3][5];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                            <div
                              data-plasmic-name={"trap1TimeLast9"}
                              data-plasmic-override={overrides.trap1TimeLast9}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.trap1TimeLast9
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData["Race 1"][3][6];
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "No Data";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                          </p.Stack>
                        ) : null}
                      </p.Stack>
                    ) : null}
                  </React.Fragment>
                )}
              </ph.DataCtxReader>
            </DataFetcher>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "tableData",
    "httpRestApiFetcher",
    "freeBox",
    "trapTimes",
    "avgTimes",
    "trapData",
    "trapData2",
    "trapData3",
    "trapData4",
    "trapData5",
    "trapData6",
    "avgTimeStdev",
    "timeStdevTrap1",
    "timeStdevTrap2",
    "timeStdevTrap3",
    "timeStdevTrap4",
    "timeStdevTrap5",
    "timeStdevTrap6",
    "avgTimesLast3",
    "trap1TimeLast3",
    "trap2TimeLast3",
    "trap3TimeLast3",
    "trap4TimeLast3",
    "trap5TimeLast3",
    "trap6TimeLast3",
    "avgTimesLast3Stdev",
    "trap1TimeLast4",
    "trap1TimeLast5",
    "trap1TimeLast6",
    "trap1TimeLast7",
    "trap1TimeLast8",
    "trap1TimeLast9",
    "stdev2"
  ],

  tableData: [
    "tableData",
    "httpRestApiFetcher",
    "freeBox",
    "trapTimes",
    "avgTimes",
    "trapData",
    "trapData2",
    "trapData3",
    "trapData4",
    "trapData5",
    "trapData6",
    "avgTimeStdev",
    "timeStdevTrap1",
    "timeStdevTrap2",
    "timeStdevTrap3",
    "timeStdevTrap4",
    "timeStdevTrap5",
    "timeStdevTrap6",
    "avgTimesLast3",
    "trap1TimeLast3",
    "trap2TimeLast3",
    "trap3TimeLast3",
    "trap4TimeLast3",
    "trap5TimeLast3",
    "trap6TimeLast3",
    "avgTimesLast3Stdev",
    "trap1TimeLast4",
    "trap1TimeLast5",
    "trap1TimeLast6",
    "trap1TimeLast7",
    "trap1TimeLast8",
    "trap1TimeLast9",
    "stdev2"
  ],

  httpRestApiFetcher: [
    "httpRestApiFetcher",
    "freeBox",
    "trapTimes",
    "avgTimes",
    "trapData",
    "trapData2",
    "trapData3",
    "trapData4",
    "trapData5",
    "trapData6",
    "avgTimeStdev",
    "timeStdevTrap1",
    "timeStdevTrap2",
    "timeStdevTrap3",
    "timeStdevTrap4",
    "timeStdevTrap5",
    "timeStdevTrap6",
    "avgTimesLast3",
    "trap1TimeLast3",
    "trap2TimeLast3",
    "trap3TimeLast3",
    "trap4TimeLast3",
    "trap5TimeLast3",
    "trap6TimeLast3",
    "avgTimesLast3Stdev",
    "trap1TimeLast4",
    "trap1TimeLast5",
    "trap1TimeLast6",
    "trap1TimeLast7",
    "trap1TimeLast8",
    "trap1TimeLast9",
    "stdev2"
  ],

  freeBox: ["freeBox"],
  trapTimes: [
    "trapTimes",
    "avgTimes",
    "trapData",
    "trapData2",
    "trapData3",
    "trapData4",
    "trapData5",
    "trapData6",
    "avgTimeStdev",
    "timeStdevTrap1",
    "timeStdevTrap2",
    "timeStdevTrap3",
    "timeStdevTrap4",
    "timeStdevTrap5",
    "timeStdevTrap6",
    "avgTimesLast3",
    "trap1TimeLast3",
    "trap2TimeLast3",
    "trap3TimeLast3",
    "trap4TimeLast3",
    "trap5TimeLast3",
    "trap6TimeLast3",
    "avgTimesLast3Stdev",
    "trap1TimeLast4",
    "trap1TimeLast5",
    "trap1TimeLast6",
    "trap1TimeLast7",
    "trap1TimeLast8",
    "trap1TimeLast9"
  ],

  avgTimes: [
    "avgTimes",
    "trapData",
    "trapData2",
    "trapData3",
    "trapData4",
    "trapData5",
    "trapData6"
  ],

  trapData: ["trapData"],
  trapData2: ["trapData2"],
  trapData3: ["trapData3"],
  trapData4: ["trapData4"],
  trapData5: ["trapData5"],
  trapData6: ["trapData6"],
  avgTimeStdev: [
    "avgTimeStdev",
    "timeStdevTrap1",
    "timeStdevTrap2",
    "timeStdevTrap3",
    "timeStdevTrap4",
    "timeStdevTrap5",
    "timeStdevTrap6"
  ],

  timeStdevTrap1: ["timeStdevTrap1"],
  timeStdevTrap2: ["timeStdevTrap2"],
  timeStdevTrap3: ["timeStdevTrap3"],
  timeStdevTrap4: ["timeStdevTrap4"],
  timeStdevTrap5: ["timeStdevTrap5"],
  timeStdevTrap6: ["timeStdevTrap6"],
  avgTimesLast3: [
    "avgTimesLast3",
    "trap1TimeLast3",
    "trap2TimeLast3",
    "trap3TimeLast3",
    "trap4TimeLast3",
    "trap5TimeLast3",
    "trap6TimeLast3"
  ],

  trap1TimeLast3: ["trap1TimeLast3"],
  trap2TimeLast3: ["trap2TimeLast3"],
  trap3TimeLast3: ["trap3TimeLast3"],
  trap4TimeLast3: ["trap4TimeLast3"],
  trap5TimeLast3: ["trap5TimeLast3"],
  trap6TimeLast3: ["trap6TimeLast3"],
  avgTimesLast3Stdev: [
    "avgTimesLast3Stdev",
    "trap1TimeLast4",
    "trap1TimeLast5",
    "trap1TimeLast6",
    "trap1TimeLast7",
    "trap1TimeLast8",
    "trap1TimeLast9"
  ],

  trap1TimeLast4: ["trap1TimeLast4"],
  trap1TimeLast5: ["trap1TimeLast5"],
  trap1TimeLast6: ["trap1TimeLast6"],
  trap1TimeLast7: ["trap1TimeLast7"],
  trap1TimeLast8: ["trap1TimeLast8"],
  trap1TimeLast9: ["trap1TimeLast9"],
  stdev2: ["stdev2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tableData: makeNodeComponent("tableData"),
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    freeBox: makeNodeComponent("freeBox"),
    trapTimes: makeNodeComponent("trapTimes"),
    avgTimes: makeNodeComponent("avgTimes"),
    trapData: makeNodeComponent("trapData"),
    trapData2: makeNodeComponent("trapData2"),
    trapData3: makeNodeComponent("trapData3"),
    trapData4: makeNodeComponent("trapData4"),
    trapData5: makeNodeComponent("trapData5"),
    trapData6: makeNodeComponent("trapData6"),
    avgTimeStdev: makeNodeComponent("avgTimeStdev"),
    timeStdevTrap1: makeNodeComponent("timeStdevTrap1"),
    timeStdevTrap2: makeNodeComponent("timeStdevTrap2"),
    timeStdevTrap3: makeNodeComponent("timeStdevTrap3"),
    timeStdevTrap4: makeNodeComponent("timeStdevTrap4"),
    timeStdevTrap5: makeNodeComponent("timeStdevTrap5"),
    timeStdevTrap6: makeNodeComponent("timeStdevTrap6"),
    avgTimesLast3: makeNodeComponent("avgTimesLast3"),
    trap1TimeLast3: makeNodeComponent("trap1TimeLast3"),
    trap2TimeLast3: makeNodeComponent("trap2TimeLast3"),
    trap3TimeLast3: makeNodeComponent("trap3TimeLast3"),
    trap4TimeLast3: makeNodeComponent("trap4TimeLast3"),
    trap5TimeLast3: makeNodeComponent("trap5TimeLast3"),
    trap6TimeLast3: makeNodeComponent("trap6TimeLast3"),
    avgTimesLast3Stdev: makeNodeComponent("avgTimesLast3Stdev"),
    trap1TimeLast4: makeNodeComponent("trap1TimeLast4"),
    trap1TimeLast5: makeNodeComponent("trap1TimeLast5"),
    trap1TimeLast6: makeNodeComponent("trap1TimeLast6"),
    trap1TimeLast7: makeNodeComponent("trap1TimeLast7"),
    trap1TimeLast8: makeNodeComponent("trap1TimeLast8"),
    trap1TimeLast9: makeNodeComponent("trap1TimeLast9"),
    stdev2: makeNodeComponent("stdev2"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
