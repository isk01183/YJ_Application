import Bottom from "../../Common/Bottom";
import Category from "../../Common/Category";
import Menu from "../../Common/Menu";
import "../../../css/foodroad/FadDetail.css";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect } from "react";
import { mainFn } from '../../../js/Common/Common.js';

export default function FadDetail(props) {
    useEffect(() => {
        mainFn()
    }, [])
    return (
        <>
            <Menu />
            <div className='Content_All'>
                <Category />
                <div className='Content_Main'>
                    <div className="fix_buttons">
                        <button className="fix_button" onClick={() => props.detailFalse()}>취소</button>
                        <button className="fix_button">삭제</button>
                        <button className="fix_button">수정</button>
                        <button className="fix_button">저장</button>
                    </div>
                    <div className="f_div">
                        <div className="i_div">
                            <th className="t_div">제목</th>
                            <td className="b_div">제목입니다.</td>
                            <th className="t_div">작성자</th>
                            <td className="b_div">작성자입니다.</td>
                        </div>
                        <div className="i_div">
                            <th className="t_div">지역</th>
                            <td className="b_div">지역.</td>
                            <th className="t_div">상세위치</th>
                            <td className="b_div">상세위치.</td>
                        </div>
                        <div className="i_div">
                            <th className="t_div">영업시간</th>
                            <td className="b_div">영업시간.</td>
                            <th className="t_div">마감시간</th>
                            <td className="b_div">마감시간ㄴ.</td>
                        </div>
                        <div className="editor_div">
                            <Editor
                                initialValue="기본내용"
                                previewStyle="vertical"
                                height="300px"
                                initialEditType="wysiwyg"
                                useCommandShortcut={false}
                            />
                        </div>
                    </div>
                    {/* 댓글 영역 */}
                    <div className="rv_div"> {/* 큰 틀 */}
                        <div className="rvin_head">

                        </div>
                        <div className="rvin_body">
                            
                        </div>
                        <div className="rvin_foot">
                            <div className="rvin_btn">
                                <input type="button" className="rvin_save" value="버튼" />
                            </div>
                        </div>
                        <div className="rv_list"> {/* 리뷰 목록 */}
                            <div className="rv_view"> {/* 대댓글 */}

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Bottom />
            </>
    )
}