import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import BackgroundOverlay from "./BackgroundOverlay";
import Center from "./Center";
import CloseModalButton from "./CloseModalButton";
import ModalBody from "./ModalBody";
import ModalContent from "./ModalContent";
import ModalContainer from "./ModalContainer";
import WindowContainer from "./WindowContainer";

class Modal extends PureComponent {
	componentDidMount() {
		document.body.style.overflow = "hidden";
	}

	/* istanbul ignore next */
	componentWillUnmount() {
		document.body.style.overflow = null;
	}

	render = () =>
		createPortal(
			<div data-testid="modal">
				<BackgroundOverlay />
				<WindowContainer>
					<ModalContainer>
						<Center maxWidth={this.props.maxWidth}>
							<ModalContent maxWidth={this.props.maxWidth}>
								<Flex
									style={{
										borderBottom: "1px solid #d3d3d3",
										padding: "2px 0",
									}}
								>
									<FlexStart>
										<div css="padding: 2px;font-weight: bold;color: #7d7d7d;">
											{this.props.title}
										</div>
									</FlexStart>
									<FlexEnd>
										<CloseModalButton
											id="close-modal"
											aria-label="close modal"
											onClick={this.props.onClick || null}
										>
											<FaTimes />
										</CloseModalButton>
									</FlexEnd>
								</Flex>
								<ModalBody>{this.props.children}</ModalBody>
							</ModalContent>
						</Center>
					</ModalContainer>
				</WindowContainer>
			</div>,
			document.body,
		);
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	maxWidth: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
};

export default Modal;
